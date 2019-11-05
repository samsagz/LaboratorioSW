Fragment ControlAmbiente-ModelContext { 
   Action: add
   Priority: high
   FragmentationPoints: model-context
   PointBracketsLan: java
   Destinations: Model-AgroAppModel.Context
   SourceCode: 
        [ALTERCODE-FRAG]
        public virtual DbSet<TipoVariableAmbiente> TipoVariableAmbiente { get; set; }
        public virtual DbSet<VariableAmbiente> VariableAmbiente { get; set; }
        public virtual DbSet<VariablesControl> VariablesControl { get; set; }
        [/ALTERCODE-FRAG]
}