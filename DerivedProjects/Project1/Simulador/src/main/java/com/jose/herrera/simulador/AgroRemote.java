package com.jose.herrera.simulador;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class AgroRemote {

    public static void postAgro(String fecha, String variableAmbiente, double valor, int moduloId, final AgroCompletion agroCompletion) {

        Retrofit retrofit = new Retrofit.Builder().baseUrl(AgroEndpoints.URL_BASE).addConverterFactory(GsonConverterFactory.create()).build();

        AgroRemoteService remoteService = retrofit.create(AgroRemoteService.class);

        Call<AgroResponse> agro = remoteService.postAgro(new AgroRequest(fecha, variableAmbiente,

                valor, moduloId));

        agro.enqueue(new Callback<AgroResponse>() {

            @Override
            public void onResponse(Call<AgroResponse> call, Response<AgroResponse> response) {

                if(response.isSuccessful()) {

                    AgroResponse response1 = response.body();

                   agroCompletion.onGetAgro(response1, "ok");

                }else {

                    agroCompletion.onGetAgro(null, response.message());

                }

            }

            @Override
            public void onFailure(Call<AgroResponse> call, Throwable t) {

               agroCompletion.onGetAgro(null, t.getMessage());

            }

        });

    }

}
