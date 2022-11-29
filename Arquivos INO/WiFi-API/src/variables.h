#include <Arduino.h>
#include <HTTPClient.h>

//BIBLIOTECAS WI-FI

#include "WiFi.h"



//#include <Servo.h>



// #define SSID "Kayure"
// #define PASSWORD "incorreta"

// #define SSID "infoprojetos"
// #define PASSWORD "sistemas987"

 #define SSID "YURIS_NetflyFibra"
 #define PASSWORD "996582995"

int angulo;
String url_pets = "https://api.ifprinteligente.com.br/petsfood/rest.php/angulo";





