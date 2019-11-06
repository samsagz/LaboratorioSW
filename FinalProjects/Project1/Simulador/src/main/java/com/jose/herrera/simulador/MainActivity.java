package com.jose.herrera.simulador;

import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private Button send;
    private EditText intervalo;
    private EditText moduloId;
    private HandlerThread simulacion;
    Handler simulacionHandler;
    private boolean started;
    private LinearLayout variableAmbienteContainer;
    /*B-attributes*/
    private VariableAmbienteView temperatura;
    private VariableAmbienteView humedad;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        send = findViewById(R.id.send);

        intervalo = findViewById(R.id.intervalo);

        variableAmbienteContainer = findViewById(R.id.variableAmbienteContainer);

        /*B-init*/
        temperatura = new VariableAmbienteView(this);

        temperatura.setVariableAmbienteName("Temperatura");

        variableAmbienteContainer.addView(temperatura);

        humedad = new VariableAmbienteView(this);

        humedad.setVariableAmbienteName("Humedad");

        variableAmbienteContainer.addView(humedad);

        moduloId = findViewById( R.id.moduloId);

        simulacion = new HandlerThread("simulacion");

        simulacion.start();

        send.setBackgroundColor(Color.GRAY);

        simulacionHandler = new Handler(simulacion.getLooper());

        send.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                started = ! started;

                if(started) {

                    send.setText("detener");

                }else {

                    send.setText("iniciar");

                    send.setBackgroundColor(Color.GRAY);

                }

                procesar();

            }

        });

    }

    private void procesar() {

        try {
        final String fecha = "123456";
        final int moduloId = getModuloId();
        final int intervalo = getIntervalo();

        /*B-procesar-attributes*/
        final double valorTemperatura = getValorTemperatura();
        final double valorHumedad = getValorHumedad();

        simulacionHandler.postDelayed(new Runnable() {

            @Override
            public void run() {

                    runOnUiThread(new Runnable() {

                        @Override
                        public void run() {

                            send.setBackgroundColor(Color.GREEN);

                        }

                    });
                /*B-procesar-calls*/
                procesarTemperatura(valorTemperatura, fecha, moduloId, intervalo);
                procesarHumedad(valorHumedad, fecha, moduloId, intervalo);

                procesar();

            }

        }, intervalo);

        }catch (Exception e) {

            runOnUiThread(new Runnable() {

                @Override
                public void run() {

                    send.setBackgroundColor(Color.RED);

                }

            });

            simulacionHandler.postDelayed(new Runnable() {
                @Override
                public void run() {
                    procesar();
                }
            }, 1000);

        }

    }

    /*B-methods*/
    private void procesarTemperatura(double valor, String fecha,  int moduloId ,  int intervalo) {

        String variableAmbiente = "Temperatura";
        start(fecha, variableAmbiente, valor, moduloId, intervalo);

    }

    private double getValorTemperatura() throws  NumberFormatException{

        double desde = temperatura.getDesde();
        double hasta = temperatura.getHasta();
        double valor = Math.random() * (hasta - desde) + desde;

        return valor;

    }

    private double getValorHumedad() throws  NumberFormatException{

        double desde = humedad.getDesde();
        double hasta = humedad.getHasta();
        double valor = Math.random() * (hasta - desde) + desde;

        return valor;

    }

    private void procesarHumedad(double valor, String fecha,  int moduloId ,  int intervalo) {

        String variableAmbiente = "Humedad";
        start(fecha, variableAmbiente, valor, moduloId, intervalo);

    }

    private int getModuloId() throws NumberFormatException{

        return Integer.parseInt(moduloId.getText().toString());

    }

    private int getIntervalo() throws NumberFormatException{

        return 1000 * Integer.parseInt(intervalo.getText().toString());

    }

    public void start(final String fecha, final String variableAmbiente, final double valor, final int moduloId, int intervalo) {

                    if(started) {

                        AgroRemote.postAgro(fecha, variableAmbiente, valor, moduloId, new AgroCompletion() {

                                    @Override
                                    public void onGetAgro(AgroResponse agroResponse, String message) {

                                        Log.e("POST " + variableAmbiente,"Agro" +valor);

                                        send.setEnabled(true);

                                        if (agroResponse != null) {

                                            String text = agroResponse.mensaje;

                                            for (String string : agroResponse.actuadores) {

                                                text = text + " " + string;

                                            }

                                            setAgroResponse(variableAmbiente, text);

                                        } else {

                                            setAgroResponse(variableAmbiente, message);

                                        }

                                    }

                                });

                    }

    }

    private void setAgroResponse(String variableAmbiente, String response) {

        /*B-Agro-Response*/
        if(variableAmbiente.equals("Temperatura")) {

           temperatura.setAgroResponse(response);

        }

        else if(variableAmbiente.equals("Humedad")) {

            humedad.setAgroResponse(response);

        }

    }

}