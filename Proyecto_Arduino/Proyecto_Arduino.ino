#include <Wire.h>
#include <SPI.h>
#include <Ethernet.h>



int Sensor = 0 ; // Prog_15_1 
int umbral = 25 ;
int led1 = 11;

String Mensaje = "";
EthernetClient client;
byte mac[] = {"Direccion mac aqui "}; 

void setup()
{
  
    Serial.begin(9600);
    pinMode(11,OUTPUT);
    Serial.println("ethernet");

    if(Ethernet.begin(mac) == 0){
      Serial.println("Datos Fallidos");
    }
    delay(1000);
}

void reloj(){
	delay(5000);
}

float leerTemp(){

  int lectura = analogRead(Sensor);
  float voltaje = 5.0 /1024 * lectura ; 
  float temp = voltaje * 100 -50 ;
  //Serial.println(temp) ; 
  if (temp >= umbral){
        digitalWrite(led1, HIGH) ;
  }
  else {
    digitalWrite(led1,LOW); 
    delay(1000); 
  }
  
  return temp;
}

String genMensaje(){

	String nombreSensor = "\"Nombresensor\":\"SensorTemp\"";
  	String temp = "\"Temperatura\":" + String(leerTemp());
  	String wrapper = "{" + nombreSensor + "," + temp + "}";
  	Serial.println(wrapper);
    return wrapper;
  	
}

void enviarDatos(){
  
  Serial.println("...Conectando...");

  if(client.connect("serviciotemp.azure-devices.net",80)){
    
    client.println("POST /tables/RegistroClima HTTP/1.1");
    client.println("HostName: serviciotemp.azure-devices.net");
    client.println("SharedAccessKey: 4s3in6uscnb93JWpkq38vIbLtTaqAm7BZT1Re91WNCk=");
    client.println("DeviceId: arduinotest1");
    client.println("Content-Type: aplication/json");
    client.println("Content-Length: 60");
    client.println("");
    client.println(Mensaje);
    client.println("");
    client.println("...Datos Enviados...");
    
    
  }else{
    client.println("Error Conexion Fallida");
  }
  

}

void leerRespuesta(){
  bool print = true;

  while(client.available()){
    char c = client.read();
    if(c =='\n'){
      print = false;

      if(print){
        Serial.println(c);
      }
    }
    
    
  }
}

void finalizarConexion(){
  client.stop();
}

void esperarRespuesta(){

  while(!client.available()){
    if(!client.connected()){
      return;
    }
  }
  
}

void loop()
{
  
  Mensaje = genMensaje();
  enviarDatos();
  esperarRespuesta();
  leerRespuesta();
  finalizarConexion();
  reloj();
}
