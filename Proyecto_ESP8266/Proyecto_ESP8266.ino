#include <DHT.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

#define DHTPIN 5
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

int humInit;
int temInit;
int temFinal;
int humFinal;

void setup() {

  Serial.begin(115200);
  dht.begin();

  int humInit = 0;
  int temInit = 0;
  int temFinal = 0;
  int humFinal = 0;

  connectWifi();
  Serial.println("Iniciando sensores...");
  delay(5000);
  
}

void connectWifi(){
  
  WiFi.begin("STARIII", "123456789");

  Serial.print("Conectando al WiFi");
  
  while (WiFi.status() != WL_CONNECTED){
    
    delay(2000);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Conectado, dirección IP: ");
  Serial.println(WiFi.localIP());
}

void postServerTemp(int paramSensor, int moduloID){
 
  if (WiFi.status() == WL_CONNECTED) { 

    const int capacity = JSON_OBJECT_SIZE(4);
    StaticJsonDocument<capacity> JSONbuffer;   //Declaring static JSON buffer
   
    JSONbuffer["Fecha"] = "1010";
    JSONbuffer["VariableAmbiente"] = "Temperatura"; //Add value to array
    JSONbuffer["Valor"] = paramSensor; //Add value to array
    JSONbuffer["ModuloId"] = moduloID;
     //Add value to array

    serializeJsonPretty(JSONbuffer, Serial);

    char JSONmessageBuffer[200];

    serializeJson(JSONbuffer, JSONmessageBuffer);
    Serial.println(JSONmessageBuffer);
    HTTPClient http;    //Declare object of class HTTPClient

    http.begin("http://serviciosgranja.azurewebsites.net/api/AgroApi");      //Specify request destination
    http.addHeader("Content-Type", "application/json");  //Specify content-type header

    int httpCode = http.POST(JSONmessageBuffer);   //Send the request
    String payload = http.getString();             //Get the response payload

    Serial.println(httpCode);   //Print HTTP return code
    Serial.println(payload);    //Print request response payload

    http.end();  //Close connection

  } else {

    Serial.println("Error al conectar WiFi");

  }
}

void postServerHume(int paramSensor, int moduloID){
 
  if (WiFi.status() == WL_CONNECTED) { 

    const int capacity = JSON_OBJECT_SIZE(4);
    StaticJsonDocument<capacity> JSONbuffer;   //Declaring static JSON buffer
   
    JSONbuffer["Fecha"] = "1010";
    JSONbuffer["VariableAmbiente"] = "Humedad"; //Add value to array
    JSONbuffer["Valor"] = paramSensor; //Add value to array
    JSONbuffer["ModuloId"] = moduloID;
     //Add value to array

    serializeJsonPretty(JSONbuffer, Serial);

    char JSONmessageBuffer[200];

    serializeJson(JSONbuffer, JSONmessageBuffer);
    Serial.println(JSONmessageBuffer);
    HTTPClient http;    //Declare object of class HTTPClient

    http.begin("http://serviciosgranja.azurewebsites.net/api/AgroApi");      //Specify request destination
    http.addHeader("Content-Type", "application/json");  //Specify content-type header

    int httpCode = http.POST(JSONmessageBuffer);   //Send the request
    String payload = http.getString();             //Get the response payload

    Serial.println(httpCode);   //Print HTTP return code
    Serial.println(payload);    //Print request response payload

    http.end();  //Close connection

  } else {

    Serial.println("Error al conectar WiFi");

  }
}


void eventTem() {

  temFinal = dht.readTemperature();

  if (temFinal != temInit) {
    Serial.print(".................Variables de Temperatura diferentes, envio Json al servidor con: ");
    Serial.println(temFinal);
    Serial.println(temInit);
    
    postServerTemp(temFinal,1);
    
    
    temInit = temFinal;

  } else {
    temInit = temFinal;
    Serial.println("No envio de Variables de Temperatura iguales en intervalo de tiempo");
    Serial.println(temFinal);
    Serial.println(temInit);
  }

}


void eventHum() {

  humFinal = dht.readHumidity();

  if (humFinal != humInit) {
    Serial.print("...........Variables de Humedad diferentes, envio Json al servidor con: ");
    Serial.println(humFinal);
    Serial.println(humInit);

    postServerHume(humFinal,1);
    
    humInit = humFinal;
    return;
  } else {
    humInit = humFinal;
    Serial.println("No envio de Variables de Humedad iguales en intervalo de tiempo");
    Serial.println(humFinal);
    Serial.println(humInit);
  }

}

void loop() {

  eventTem();
  eventHum();

  //delay(15000);

}
