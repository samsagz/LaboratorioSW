Fragment ControlAmbiente-Dashboard1 { 
   Action: add
   Priority: high
   FragmentationPoints: control-variables
   PointBracketsLan: java
   Destinations: Dashboard-DashboardCs
   SourceCode: 
        [ALTERCODE-FRAG]
                    result.variables_control = moduloDB.Planta.VariablesControl
                                    .ToDictionary(a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente,
                                                    b => b.VariableControl.ToString(),
                                                    StringComparer.OrdinalIgnoreCase);
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Dashboard2 { 
   Action: replace
   Priority: high
   FragmentationPoints: variables-ambiente
   PointBracketsLan: java
   Destinations: Dashboard-DashboardCs
   SourceCode: 
        [ALTERCODE-FRAG]
                ,variables_ambiente = moduldoDB.VariableAmbiente.GroupBy(g => g.TipoVariableAmbienteId)
                                                .Select(s => s.OrderByDescending(odb => odb.TimeTag)
                                                            .FirstOrDefault()
                                                        )
                                                .ToDictionary(
                                                            a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente,
                                                            b => b.Valor,
                                                            StringComparer.OrdinalIgnoreCase)
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Dashboard3 { 
   Action: add
   Priority: high
   FragmentationPoints: graficar-ambiente
   PointBracketsLan: java
   Destinations: Dashboard-DashboardCs
   SourceCode: 
        [ALTERCODE-FRAG]
            moduldoDB.VariableAmbiente
                .Where(a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente == tipoVariable)
                .OrderByDescending(a => a.TimeTag)
                .Select(b => new GraficaAmbienteResult
                {
                    captura = b.VariableAmbienteId.ToString(),
                    valor = b.Valor
                }).Take(10).ToList();
        [/ALTERCODE-FRAG]
}