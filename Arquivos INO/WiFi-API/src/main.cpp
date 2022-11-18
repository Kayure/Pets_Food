#include "functions.h"
#include <ESP32Servo.h>

Servo myservo;  // CRIAÇÃO DO OBJETO SERVO
// twelve servo objects can be created on most boards

// PINO GPIO USADO NA ESP32
static const int servoPin = 15;

WiFiServer server(80);

// VARIAVEL QUE ARMAZENA A REQUISIÇÃO HTTP
String header;

// INICIALIZAÇÃO DAS VARIAVEIS
String valueString = String(5);
int pos1 = 0;
int pos2 = 0;

// HORA ATUAL
unsigned long currentTime = millis();
// HORA ANTERIOR 
unsigned long previousTime = 0; 
// TEMPO EM MILISEGUNDOS (EXEMPLO: 2000ms = 2s)
const long timeoutTime = 2000;



void setup() {

  Serial.begin(9600);
  wifiConnect();

   myservo.attach(servoPin);  // VINCULA SERVOPIN AO SERVO

  //CONECTA NO WI-FI
  Serial.print("Conetando na rede: ");
  Serial.println(SSID);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // MOSTRA IP QUE DEVE SE CONECTAR PARA ABRIR O SERVO WEB
  Serial.println("");
  Serial.println("Conectado. Sucesso para usar no PlatformIO");
  Serial.println("Endereço IP : ");
  Serial.println(WiFi.localIP());
  server.begin();
}



void loop() {
  
  if(WiFi.status() == WL_CONNECTED) {
      getRequestAPIPets();
      
  }
  delay(10000);

  if(angulo >= 0) {

    myservo.write(angulo); 
    Serial.print("Valor do angulo = ");
    Serial.println(angulo); 
  }
  

  

  WiFiClient client = server.available();   

  if (client) {                             
    currentTime = millis();
    previousTime = currentTime;
    Serial.println("Novo Client.");          
    String currentLine = "";                

    //ENQUANTO O CLIENTE ESTÁ CONECTADO VAI DEIXAR A PAGINA WEB NO AR, ps: copiei da internet
    while (client.connected() && currentTime - previousTime <= timeoutTime) { 
      currentTime = millis();
      if (client.available()) {            
        char c = client.read();             
        Serial.write(c);                    
        header += c;
        if (c == '\n') {                   
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");
            client.println();

            //CRIA A PAGINA HTML
            client.println("<!DOCTYPE html><html>");
            client.println("<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
            client.println("<link rel=\"icon\" href=\"data:,\">");

            //ESTILOS CSS            
            client.println("<style>body { text-align: center; font-family: \"Trebuchet MS\", Arial; margin-left:auto; margin-right:auto;}");
            client.println(".slider { width: 300px; }</style>");
            client.println("<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>");
                     
            // BODY DA PAGINA HTML
            client.println("</head><body><h1>Slider</h1>");
            client.println("<p>Posicao: <span id=\"servoPos\"></span></p>");          
            client.println("<input type=\"range\" min=\"0\" max=\"180\" class=\"slider\" id=\"servoSlider\" onchange=\"servo(this.value)\" value=\""+valueString+"\"/>");
            
            client.println("<script>var slider = document.getElementById(\"servoSlider\");");
            client.println("var servoP = document.getElementById(\"servoPos\"); servoP.innerHTML = slider.value;");
            client.println("slider.oninput = function() { slider.value = this.value; servoP.innerHTML = this.value; }");
            client.println("$.ajaxSetup({timeout:1000}); function servo(pos) { ");
            
            //ENVIA PARA A API O VALOR DO SLIDER  <----
            client.println("$.get(\"https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/\" + pos\); {Connection: close};}</script>");
           
            client.println("</body></html>");     
            
            //PEGA O VALOR DA URL E MANDA PARA O SERVO
            if(header.indexOf("GET /?value=")>=0) {
              pos1 = header.indexOf('=');
               pos2 = header.indexOf('&');

              valueString = header.substring(pos1+1, pos2);
              //GIRA O SERVO
               myservo.write(valueString.toInt());
                Serial.println(valueString); 
              

            //    Serial.print("value String = ");
            //    Serial.println(valueString);

            //    Serial.print("Angulo Alterado = ");
            //    Serial.println(angulo);
             }

                         
            
            client.println();
            // Break out of the while loop
            break;
          } else { // if you got a newline, then clear currentLine
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }
      }
    }
    // Clear the header variable
    header = "";
    // FECHA A 
    //client.stop();
    Serial.println("Client disconnected.");
    Serial.println("");

    
  }







}
