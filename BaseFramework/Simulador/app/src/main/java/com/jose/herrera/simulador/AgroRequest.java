package com.jose.herrera.simulador;

public class AgroRequest {

    String Fecha;
    String VariableAmbiente;
    double Valor;
    int ModuloId;

    public AgroRequest(String Fecha, String VariableAmbiente, double Valor, int ModuloId) {

        this.Fecha = Fecha;
        this.VariableAmbiente = VariableAmbiente;
        this.Valor = Valor;
        this.ModuloId = ModuloId;

    }
}
