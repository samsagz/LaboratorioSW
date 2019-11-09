////////////// LIBRERIAS
#include <DHT.h>
#include <PID_v1.h>

#define DHTTYPE DHT11
#define DHTPIN 5
DHT dht(DHTPIN, DHTTYPE);

#define Sensor A0
#define VEN_OUTPUT 2 
#define LUZ_OUTPUT 9

double valorTemperatura, temperaturaEsperada=33, salidaPWM;
double salidaPWMVen=0;
unsigned long tiempoActual =0, tiempoPrevio=0;
double tiempoTranscurrido=0;

double error=0;
double errorPrevio=0;
double errorAcu=0, cambError=0;

float kp=3.7734;
float ki=0.000001;
float kd=15;

int tiempo=1000;
double ultimoTiempo;

int salida=255;
double salidaLuz=255;
//PID myPID(&valorTemperatura, &salidaPWM, &temperaturaEsperada, kp, ki, kd, DIRECT);

void setup (){  
  Serial.begin(115200);
  TCCR2B = TCCR2B & 0b000 | 0x07;
  error=0;
  errorPrevio=0;
  errorAcu=0;
  cambError=0;
  valorTemperatura=dht.readTemperature();
  salidaPWM=0;
  dht.begin();
}

double promLectura(){
  double prom = dht.readTemperature();
  int i=0;
  while (i<5){
    prom += dht.readTemperature();
    i++;
  }
  prom = prom/(i+1);
  return prom;
}

void validarSerial (){
  if(Serial.available()){
    String data = Serial.readStringUntil('\n');
    String variable = data.substring(0,1);
    String datos = data.substring(2);

   if(variable.equals("S") || variable.equals("s")){
      temperaturaEsperada=datos.toDouble();
   }
   if(variable.equals("P") || variable.equals("p")){
      kp=datos.toFloat();      
   }
   if(variable.equals("I") || variable.equals("i")){
      ki=datos.toFloat();
   }
   if(variable.equals("D") || variable.equals("d")){
      kd=datos.toFloat();
   }
  }
}

void calcularPID(){
  tiempoActual=millis();
  tiempoTranscurrido =tiempoActual - tiempoPrevio;
  tiempoPrevio = tiempoActual;

  error= temperaturaEsperada - valorTemperatura;
  errorAcu += error*tiempoTranscurrido;
  cambError = (error-errorPrevio)/tiempoTranscurrido;

  salidaPWM = kp*error + ki*errorAcu + kd*cambError;
  salida += salidaPWM*-1; 

  salidaLuz = salidaLuz-(salida-255);
  if(salida >=255){
    salida=255;
  }else{
    if(salida <=60){
      salida =60;
    }
  }
  if(salidaLuz<0){
    salidaLuz=0;
  }else{
    if(salidaLuz >=255){
      salidaLuz=255;
    }
  } 
  salidaPWM = salida;
}

void loop(){
   unsigned long now = millis();
   int camTiemp = (now-ultimoTiempo);
   if(camTiemp >= tiempo){
       validarSerial();
       valorTemperatura = promLectura();
       calcularPID();
       prenderApagar();
       //exportarDatos();
       //pintarDatos();
       pintarGrafica();       
      ultimoTiempo = now;      
   }   
}

void exportarDatos(){
   Serial.print(" Lectura del ventiladoR;");
   Serial.print(salidaPWM);
   Serial.print(";Lectura del sensor;");
   Serial.print(valorTemperatura);
   Serial.println("");
}

void pintarDatos(){
  Serial.print("SP =  ");
  Serial.print(temperaturaEsperada);
  Serial.print("  ");
  Serial.print("Temp =  ");
  Serial.print(valorTemperatura);
  Serial.print("  ");
  Serial.print("Error =  ");
  Serial.print(error);
  Serial.print("  ");
  Serial.print("Salida =  ");
  Serial.print(salida);
  Serial.print("  ");
  Serial.print("SalidaPWM =  ");
  Serial.print(salidaPWMVen);
  Serial.print("  ");
  Serial.println("");
}

void pintarGrafica(){
  Serial.print((salida/10));
  Serial.print(",");
  Serial.print(temperaturaEsperada);
  Serial.print(",");
  Serial.println(valorTemperatura);
}

void prenderApagar(){
    salidaPWMVen=salidaPWM;
    controlarVentilador(salidaPWMVen);
    controlarLuz(salidaLuz);
}

void controlarVentilador(int salida2){
  analogWrite(VEN_OUTPUT, salida2);
}

void controlarLuz(int salida2){
  analogWrite(LUZ_OUTPUT, salida2);
}
