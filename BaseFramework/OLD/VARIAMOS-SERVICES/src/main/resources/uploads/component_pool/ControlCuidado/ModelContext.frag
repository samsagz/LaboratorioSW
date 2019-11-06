Fragment ControlCuidado-ModelContext { 
   Action: add
   Priority: high
   FragmentationPoints: model-context
   PointBracketsLan: java
   Destinations: Model-AgroAppModel.Context
   SourceCode: 
        [ALTERCODE-FRAG]
        public virtual DbSet<TipoVariableCuidado> TipoVariableCuidado { get; set; }
        public virtual DbSet<VariableCuidado> VariableCuidado { get; set; }
        [/ALTERCODE-FRAG]
}