Fragment ControlCuidado-Diagram { 
   Action: add
   Priority: high
   FragmentationPoints: tables-diagram
   PointBracketsLan: html
   Destinations: Model-AgroAppModel.edmx
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntityTypeShape EntityType="AgroAppDbModel.TipoVariableCuidado" Width="1.5" PointX="3.75" PointY="0.875" IsExpanded="true" />
        <EntityTypeShape EntityType="AgroAppDbModel.VariableCuidado" Width="1.5" PointX="6" PointY="1.625" IsExpanded="true" />
        <AssociationConnector Association="AgroAppDbModel.FK_VariableCuidado_Planta" ManuallyRouted="false" />
        <AssociationConnector Association="AgroAppDbModel.FK_VariableCuidado_TipoVariableCuidado" ManuallyRouted="false" />
        [/ALTERCODE-FRAG]
}