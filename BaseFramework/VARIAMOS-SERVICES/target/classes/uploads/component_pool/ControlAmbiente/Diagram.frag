Fragment ControlAmbiente-Diagram { 
   Action: add
   Priority: high
   FragmentationPoints: tables-diagram
   PointBracketsLan: html
   Destinations: Model-AgroAppModel.edmx
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntityTypeShape EntityType="AgroAppDbModel.TipoVariableAmbiente" Width="1.5" PointX="3" PointY="8.75" IsExpanded="true" />
        <EntityTypeShape EntityType="AgroAppDbModel.VariableAmbiente" Width="1.5" PointX="5.25" PointY="4.5" IsExpanded="true" />
        <EntityTypeShape EntityType="AgroAppDbModel.VariablesControl" Width="1.5" PointX="6" PointY="7.625" IsExpanded="true" />
        <AssociationConnector Association="AgroAppDbModel.FK_VariablesControl_Planta" ManuallyRouted="false" />
        <AssociationConnector Association="AgroAppDbModel.FK_VariableAmbiente_TipoVariableAmbiente" ManuallyRouted="false" />
        <AssociationConnector Association="AgroAppDbModel.FK_VariablesControl_TipoVariableAmbiente" ManuallyRouted="false" />
        [/ALTERCODE-FRAG]
}