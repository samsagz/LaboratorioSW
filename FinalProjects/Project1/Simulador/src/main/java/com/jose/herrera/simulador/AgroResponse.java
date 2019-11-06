package com.jose.herrera.simulador;

import com.google.gson.annotations.SerializedName;

public class AgroResponse {

    @SerializedName("Mensaje")
    String mensaje;

    @SerializedName("Actuadores")
    String[] actuadores;

}
