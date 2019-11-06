////////////// LIBRERIAS
#include <DHT.h>
#include <PID_v1.h>

/////////////// DEFINE EL SENSOR DE TEMPERATURA
#define DHTTYPE DHT11
#define DHTPIN 5
DHT dht(DHTPIN, DHTTYPE);

//////////// DEFINE LOS PINES DE SALIDA (ACTUADORES)
#define VEN_OUTPUT 2 
#define LUZ_OUTPUT 3 

///// CONSTANTES PID
double kp = 0.49412;
double ki = -0.00001;
double kd = 0;

////////// TIEMPO
unsigned long tiempoActual=0, tiempoPrevio=0;
double tiempoTranscurrido=0;

/////////// ERROR
double error=0;  ///// proporcional
double errorPrevio=0;
double errorAcu=0, cambError=0;  ////// integral y derivativo

/////// VARIABLES CONTROLAR
double entradaTemperatura=35, valorTemperatura=0;
double salidaPWM=0;
int salidaPWMLuz=0;
int salidaPWMVen=0;

////// ERROR SENSOR
int errorSensor=0;

/////////// escritura de archivo
const unsigned int NUMREADS = 12;
String readBuffer = "";
unsigned int readings[NUMREADS] = {0};
unsigned int readIndex = 0;

//PID myPID(&valorTemperatura, &salidaPWM, &entradaTemperatura, kp, ki, kd, DIRECT);

void setup() {
  //myPID.SetMode(AUTOMATIC);
  error=0;
  errorPrevio=0;
  errorAcu=0;
  cambError=0;  ////// integral y derivativo

/////// VARIABLES CONTROLAR
  valorTemperatura=0;
 salidaPWM=0;
 salidaPWMLuz=0;
 salidaPWMVen=0;
 errorSensor=0;
  Serial.begin(115600);
  dht.begin();
}

void loop() {
  leerTemperatura();
  calcularPID();
  delay(300);
}

/*
 * Se encarga de realizar la lectura de la temperatura
 */
void leerTemperatura(){
  int i = 0;
  while(i<5){
    valorTemperatura = valorTemperatura + dht.readTemperature();
    i++;
  }
  valorTemperatura = valorTemperatura/5;
}


/*
 * Calculo PID
 */
void calcularPID(){
  tiempoActual= millis();
  tiempoTranscurrido = tiempoActual - tiempoPrevio;
  tiempoPrevio = tiempoActual;

  error= entradaTemperatura - valorTemperatura;
  errorAcu += error*tiempoTranscurrido;
  cambError=  (error - errorPrevio)/tiempoTranscurrido;

  salidaPWM = kp*error + ki*errorAcu + kd*cambError; 
  Serial.println("Este es el PWM solito");
  Serial.println(salidaPWM);
  salidaPWM = salidaPWM*-1;

  //////////// Valida la energia del Bombillo
  if(salidaPWM <= 0.5){
    ///// va el codigo de regular la energia
    salidaPWMLuz = salidaPWM;
    salidaPWMVen = 120;
    controlarVentilador(salidaPWMVen);
    Serial.println("Este es salida PWM por luz ");
     Serial.println(salidaPWMVen);
    
  }else{
    salidaPWMVen= salidaPWM;
    int y = map(salidaPWMVen,1,8,180,255);
    salidaPWMVen=mapeo(y);
    Serial.println("Este es salida PWM");
     Serial.println(salidaPWMVen);
    controlarVentilador(salidaPWMVen);
  }

  /*
  Serial.println("Este es salida PWM");
  Serial.println(salidaPWMVen);
  int y = map(salidaPWMVen,1,5,180,255);
  salidaPWMVen=mapeo(y);

  Serial.println("Este es Y");
  Serial.println(y);
  Serial.println("Este es salida PWM 2");
  Serial.println(salidaPWMVen);
  //salidaPWM= y;

  */
//  controlarVentilador();
  Serial.print(" Lectura del ventiladoR;");
  Serial.print(salidaPWMVen);
  Serial.print(";Lectura del sensor;");
  Serial.print(valorTemperatura);
  Serial.println("");
    
  errorPrevio = error;
}

/*
 * Funcion que se encarga de prender el ventilador
 */
void controlarVentilador(int salida){
  /*
  if(salidaPWM < 20){
    salidaPWM=0;
  }
  if(salidaPWM >255){
    salidaPWM=255;
  }*/
  analogWrite(VEN_OUTPUT, salida);
}

/*
 * Funcion que se encarga de controlar la Luz
 */
void controlarLuz (){
  analogWrite(LUZ_OUTPUT, salidaPWM);
}



int mapeo(int x1){
  int r=0;
  if (x1<55){
    r=0;
  }else{
    if(x1>= 55 && x1 < 180){
      r=150;
    }else{
      if(x1>=255){
        r=255;
      }else{
        r=x1;  
      }
      
    }
  }
  return r;
}
