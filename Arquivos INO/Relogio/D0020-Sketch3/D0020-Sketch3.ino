#include <Servo.h>
#include "relogio.h"

Servo meuServo;

#define qtdeProgramas 3  //Quantas vezes o alimentador sera disparado no dia
horario programa[qtdeProgramas];
byte    ultimoAcionamento = 255;

void setup() {
  ajustaHorario(18, 07, 0); //Ajusta o horario inicial ao ligar o Arduino

  //PROGRAMAÇÃO
  gravaPrograma(0, 8, 0);
  gravaPrograma(1, 12, 30);
  gravaPrograma(2, 18, 15);

  meuServo.attach(10);
  Serial.begin(9600);
}

void loop() {
  quandoMillisZerar();
  conferePrograma();
  Serial.println(horaParaTexto(horarioAtual()));
}

void gravaPrograma(int posicao, byte hora, byte minuto) {
  programa[posicao].hora    = hora;
  programa[posicao].minuto  = minuto;
}

void conferePrograma() {
  for (int nL=0; nL < qtdeProgramas; nL++ ) {  //repete para conferir todos os programas
      if ( horaMinutoIgual( programa[nL], horarioAtual() ) ) { //um programa é igual ao horario atual ?
         if (ultimoAcionamento != nL) { 
            acionamento();
            ultimoAcionamento = nL;
         }
      }
  }
}

void acionamento() {
  Serial.println("Acionamento Ativado. Servo em posicao 180o"); 
  digitalWrite(13, HIGH);
  meuServo.write(180);
  delay(2000);
  digitalWrite(13, LOW);
  meuServo.write(0);
  Serial.println("Acionamento Finalizado. Servo em posicao 0o"); 
}
