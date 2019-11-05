package com.jose.herrera.simulador;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface AgroRemoteService {

    @POST(AgroEndpoints.POST_AGRO)
    Call<AgroResponse> postAgro(@Body AgroRequest agroRequest);

}
