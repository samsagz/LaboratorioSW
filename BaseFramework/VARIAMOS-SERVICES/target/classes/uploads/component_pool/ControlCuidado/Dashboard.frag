Fragment ControlCuidado-Dashboard1 { 
   Action: add
   Priority: high
   FragmentationPoints: control-variables
   PointBracketsLan: java
   Destinations: Dashboard-DashboardCs
   SourceCode: 
        [ALTERCODE-FRAG]
             result.variables_cuidado = moduloDB.Planta.VariableCuidado
                                    .ToDictionary(a => a.TipoVariableCuidado.NombreTipoVariableCuidado,
                                                    b => b.ValorCuidado,
                                                    StringComparer.OrdinalIgnoreCase);
        [/ALTERCODE-FRAG]
}
