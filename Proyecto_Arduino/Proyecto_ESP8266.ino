#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

void setup() {

  Serial.begin(115200);
  Serial.println("Comenzando..");

  delay(2000);

  WiFi.begin("iPhone JF", "500pesos");

  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(5000);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Conectado, dirección IP: ");
  Serial.println(WiFi.localIP());

}

void loop() {
  // put your main code here, to run repeatedly:

  delay(5000);
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status

    const int capacity = JSON_OBJECT_SIZE(4);

    StaticJsonDocument<capacity> JSONbuffer;   //Declaring static JSON buffer
    //JsonObject& JSONencoder = JSONbuffer.createObject();

    //JSONencoder["Fecha"] = "10:10";

    //JsonObject VariableAmbiente = JSONencoder.createNestedObject(); //JSON array
    JSONbuffer["Fecha"] = "101010";
    JSONbuffer["VariableAmbiente"] = "Temperatura"; //Add value to array
    JSONbuffer["Valor"] = 25; //Add value to array
    JSONbuffer["ModuloId"] = 2; //Add value to array



    serializeJsonPretty(JSONbuffer, Serial);
    

    char JSONmessageBuffer[200];
    //Serial.println(JSONbuffer);
    //JsonObject obj = JSONbuffer.to<JsonObject>();

    serializeJson(JSONbuffer, JSONmessageBuffer);

    Serial.println(JSONmessageBuffer);

    
    HTTPClient http;    //Declare object of class HTTPClient

    http.begin("http://serviciosgranja.azurewebsites.net/api/AgroApi");      //Specify request destination
    http.addHeader("Content-Type", "application/json");  //Specify content-type header
    //http.addHeader("Location", "http://serviciosgranja.azurewebsites.net/api/AgroApi");

    /*Location: https://spreadsheets.google.com/ . */

    int httpCode = http.POST(JSONmessageBuffer);   //Send the request
    String payload = http.getString();             //Get the response payload

    Serial.println(httpCode);   //Print HTTP return code
    Serial.println(payload);    //Print request response payload

    http.end();  //Close connection

  } else {

    Serial.println("Error in WiFi connection");


  }

  



}
