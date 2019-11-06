Fragment ControlAmbiente-Class1 { 
   Action: replace
   Priority: high
   FragmentationPoints: RegistrarValorAmbiente
   PointBracketsLan: java
   Destinations: AgroApi-Class1
   SourceCode: 
        [ALTERCODE-FRAG]
            _db.VariableAmbiente.Add(new VariableAmbiente
            {
                ModuloId = moduloId,
                TimeTag = DateTime.Now,
                TipoVariableAmbienteId = (int)tipoVariableAmbiente,
                Valor = valor
            });

            _db.SaveChanges();

            return new List<Actuador>()
            {
                new Actuador(){NombreActuador="Ventilador",Activar=false},
                new Actuador(){NombreActuador="Bomba",Activar=true}
            };
        [/ALTERCODE-FRAG]
}