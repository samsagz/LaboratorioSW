package com.jose.herrera.simulador;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;

public class VariableAmbienteView extends ConstraintLayout {

    private TextView agroResponse;
    private EditText desde;
    private EditText hasta;
    private TextView variableAmbienteName;

    public VariableAmbienteView(Context context) {

        super(context);

        init(context);

    }

    public VariableAmbienteView(Context context, @Nullable AttributeSet attrs) {

        super(context, attrs);

        init(context);

    }


    private void init(Context context) {

        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        inflater.inflate(R.layout.view_variable_ambiente, this);

        agroResponse = findViewById(R.id.agroResponse);

        desde = findViewById(R.id.desde);

        hasta = findViewById(R.id.hasta);

        variableAmbienteName = findViewById(R.id.variableAmbienteName);

    }

    public void setAgroResponse(String agroResponse) {

        this.agroResponse.setText(agroResponse);

    }

    public double getDesde() throws NumberFormatException{

        return Double.parseDouble(desde.getText().toString());

    }

    public void setVariableAmbienteName(String variableAmbienteName) {

        this.variableAmbienteName.setText(variableAmbienteName);

    }

    public double getHasta() throws NumberFormatException{

        return Double.parseDouble(hasta.getText().toString());

    }

}
