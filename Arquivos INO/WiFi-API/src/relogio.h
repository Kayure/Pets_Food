//Estrutura e tipo para armazenar um horario
typedef struct {
  byte hora;
  byte minuto;
  byte segundo;
} horario;

//Quantos milesimos de segundos um dia possui
#define milesimosNoDia 86400000

//Horario quando o Arduino for ligado e o millis() estiver próximo de zero.
uint32_t milesimoInicial;

//Acerta o horario (para uso no SETUP)
void ajustaHorario(byte hora, byte minuto, byte segundo);

//Retorna o horario atual
horario horarioAtual();

//Comparações entre dois horarios
bool horarioMenor(horario valor1, horario valor2);
bool horarioMaior(horario valor1, horario valor2);
bool horarioIgual(horario valor1, horario valor2);
bool horaMinutoIgual(horario valor1, horario valor2);

//Conversão
uint32_t horarioParaMilesimo(horario origem);
uint32_t horarioParaSegundos(horario origem);
uint32_t horarioParaMinutos(horario origem);
horario milesimoParaHorario(uint32_t origem);
String horaParaTexto(horario origem);
String strZero(int valor, byte digitos);

//Ajuste do relogio quando o millis() zerar (a cada 50 dias aprox.)
void quandoMillisZerar();


void ajustaHorario(byte hora, byte minuto, byte segundo) {
  horario horarioInicial;
  horarioInicial.segundo = segundo; 
  horarioInicial.minuto  = minuto; 
  horarioInicial.hora    = hora;
  milesimoInicial = horarioParaMilesimo(horarioInicial);
}

horario horarioAtual() {  
  uint32_t milesimoAtual = (milesimoInicial + (millis() % milesimosNoDia));
  return milesimoParaHorario(milesimoAtual);
}

bool horarioMenor(horario valor1, horario valor2) {
	return horarioParaMilesimo(valor1) < horarioParaMilesimo(valor2);
}

bool horarioMaior(horario valor1, horario valor2) {
	return horarioParaMilesimo(valor1) > horarioParaMilesimo(valor2);
}

bool horarioIgual(horario valor1, horario valor2) {  
	return horarioParaMilesimo(valor1) == horarioParaMilesimo(valor2);
}

bool horaMinutoIgual(horario valor1, horario valor2) {  
	return horarioParaMinutos(valor1) == horarioParaMinutos(valor2);
}				
		
uint32_t horarioParaMilesimo(horario origem) {
  uint32_t retorno;

  retorno = horarioParaSegundos(origem) * 1000;
  return retorno;
}

uint32_t horarioParaSegundos(horario origem) {
  uint32_t retorno;

  retorno = horarioParaMinutos(origem) * 60;
  retorno += origem.segundo;

  return retorno;
}

uint32_t horarioParaMinutos(horario origem) {
  uint32_t retorno;

  retorno =  (uint32_t)origem.hora * 60; 
  retorno += (uint32_t)origem.minuto;

  return retorno;
}

horario milesimoParaHorario(uint32_t origem) {
  horario retorno;

  origem = origem / 1000;
  retorno.segundo = origem % 60;
  
  origem = origem / 60;
  retorno.minuto  = origem % 60;

  origem = origem / 60;
  retorno.hora  = origem % 24;
  return retorno;
}

String horaParaTexto(horario origem) {
  String textoRetorno = strZero(origem.hora, 2);
  textoRetorno += ":";
  textoRetorno += strZero(origem.minuto, 2);
  textoRetorno += ":";
  textoRetorno += strZero(origem.segundo, 2);
  return textoRetorno;
}

String strZero(int valor, byte digitos) {
  String textoRetorno = String(valor);
  while (textoRetorno.length() < digitos ) {
    textoRetorno = "0" + textoRetorno;
  }
  return textoRetorno;
}

void quandoMillisZerar() {
static uint32_t ultimoMillis;

  if (millis() < ultimoMillis) { //millis zerou
     milesimoInicial += (uint32_t)pow(2, sizeof(uint32_t)*8 ) % milesimosNoDia;        
     milesimoInicial = milesimoInicial % milesimosNoDia;
  }
  ultimoMillis = millis();   
}
