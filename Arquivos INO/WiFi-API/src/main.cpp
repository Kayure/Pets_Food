#include "functions.h"
#include "relogio.h"
#include <ESP32Servo.h>

Servo myservo;  // CRIAÇÃO DO OBJETO SERVO
// twelve servo objects can be created on most boards


HTTPClient http; // CRIA OBJETO HTTP


// PINO GPIO USADO NA ESP32
static const int servoPin = 15;

WiFiServer server(80);

// Set web server port number to 80
WiFiServer server(80);

// Variable to store the HTTP request
String header;

// Decode HTTP GET value
String valueString = String(5);
int pos1 = 0;
int pos2 = 0;

// Current time
unsigned long currentTime = millis();
// Previous time
unsigned long previousTime = 0; 
// Define timeout time in milliseconds (example: 2000ms = 2s)
const long timeoutTime = 2000;



void setup() {

  Serial.begin(9600);

  //CONECTA NO WI-FI
  wifiConnect();

   myservo.attach(servoPin);  // VINCULA SERVOPIN AO SERVO

}

void loop() {

  
  if(WiFi.status() == WL_CONNECTED) {

     

      getRequestAPIPets();     
  
  }
  






  delay(10000);

//REFEIÇÃO PEQUENA 
  if(angulo == 0) {

    myservo.write(0);     
    

  }

  //REFEIÇÃO PEQUENA 
  if(angulo == 1) {
    //ABRINDO
    myservo.write(90); 
    delay(4000);
    Serial.print("Valor do angulo = ");    
    myservo.write(0); 
    http.begin("https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/0"); //Specify the URL
    int httpCode = http.GET();

  }

  //REFEIÇÃO MEDIA 
  if(angulo == 2) {

    myservo.write(90); 
    delay(6000);
    Serial.print("Valor do angulo = ");    
    myservo.write(0); 
    http.begin("https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/0"); //Specify the URL
    int httpCode = http.GET();

  }

  //REFEIÇÃO GRANDE 
  if(angulo == 3) {

    myservo.write(90); 
    delay(10000);
    Serial.print("Valor do angulo = ");    
    myservo.write(0); 
    http.begin("https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/0"); //Specify the URL
    int httpCode = http.GET();

  }

  







}