#include "variables.h"

void wifiConnect() {

    WiFi.mode(WIFI_STA);
    WiFi.begin(SSID, PASSWORD);
    // confere se está conectado no wifi
    Serial.print("Connecting to WiFi Router.");
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(1000);
    }

    Serial.print("Connected to the WiFi network: ");
    Serial.println(WiFi.localIP());
}

String getData(String payload, String row) {
    
    int a, b, c;
    String retorno = "error";

    for(a=0; a<payload.length(); a++) {
        for(b=0, c=a; payload.charAt(c) == row.charAt(b); b++, c++) { }
        // Encontrou
        if(b == row.length()) {
            retorno = "";
            for(c=c+3; payload.charAt(c) != '"'; c++) {
                retorno = retorno + payload.charAt(c);
            }
        }
    }

    return retorno;
}

void getRequestAPIPets() {

    HTTPClient http;
    String serverPath = url_pets;
      
    // Your Domain name with URL path or IP address with path
    http.begin(serverPath.c_str());
    // Send HTTP GET request
    int httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        
        String valor = getData(http.getString(), "valor");
        angulo = valor.toInt();
        Serial.print("Angulo = ");
        Serial.println(angulo);
    }
    else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
    }
    
    // Free resources
    http.end();
}
