#include <DHT.h>
#include <PID_v1.h>

#define DHTTYPE DHT11
#define DHTPIN 5

#define PIN_OUTPUT 2 

DHT dht(DHTPIN, DHTTYPE);

float temp;
float humedad;

///// CONSTANTES PID
double kp = 10;
double ki = 0.005;
double kd = 0.002;

////////// TIEMPO
unsigned long tiempoActual=0, tiempoPrevio=0;
double tiempoTranscurrido=0;

/////////// ERROR
double error=0;  ///// proporcional
double errorPrevio=0;
double errorAcu=0, cambError=0;  ////// integral y derivativo

/////// VARIABLES CONTROLAR
double entradaTemperatura=40, valorTemperatura=0;
double salidaPWM=0;

////// ERROR SENSOR
int errorSensor=0;

/////////// escritura de archivo
const unsigned int NUMREADS = 12;
String readBuffer = "";
unsigned int readings[NUMREADS] = {0};
unsigned int readIndex = 0;

PID myPID(&valorTemperatura, &salidaPWM, &entradaTemperatura, kp, ki, kd, DIRECT);

void setup() {
  myPID.SetMode(AUTOMATIC);
  Serial.begin(115600);
  dht.begin();
  temp = 0;
}

void loop() {
  leerTemperatura();
  calcularPID();
  delay(300);
}

void leerTemperatura(){

  int i = 0;
  while(i<5){
    valorTemperatura = valorTemperatura + dht.readTemperature();
    i++;
  }
  valorTemperatura = valorTemperatura/5;
}

void prenderVentilador(){
  if(salidaPWM < 20){
    salidaPWM=0;
  }
  if(salidaPWM >255){
    salidaPWM=255;
  }

  analogWrite(PIN_OUTPUT, salidaPWM);
  
}

void calcularPID(){
  tiempoActual= millis();
  tiempoTranscurrido = tiempoActual - tiempoPrevio;
  tiempoPrevio = tiempoActual;

  error= entradaTemperatura - valorTemperatura;
  errorAcu += error*tiempoTranscurrido;
  cambError=  (error - errorPrevio)/tiempoTranscurrido;

  salidaPWM = kp*error + ki*errorAcu + kd*cambError; 
  Serial.println(salidaPWM);
  salidaPWM = salidaPWM*-1;
  if(salidaPWM <= 1 )
  {
    salidaPWM = 0;
  }
  Serial.println("Este es salida");
  Serial.println(salidaPWM);
  int y = map(salidaPWM,1,100,55,255);
  if (y < 55){
    y=0;
  }
  Serial.println("Este es Y");
  Serial.println(y);
  salidaPWM= y;

  
  prenderVentilador();
  Serial.print(" Lectura del ventiladoR;");
  Serial.print(salidaPWM);
  Serial.print(";Lectura del sensor;");
  Serial.print(valorTemperatura);
  Serial.println("");
  
  
  errorPrevio = error;
}
