Fragment ControlAmbiente-AlterAgroAppProj { 
   Action: replace
   Priority: high
   FragmentationPoints: productobject
   PointBracketsLan: c#
   Destinations: ControlAmbiente-Control
   SourceCode: 
        [ALTERCODE-FRAG]
        --ESTO VA EN OTRA PARTE <ItemGroup>
        <Compile Include="Controllers\TipoVariableAmbientesController.cs" />
        <Compile Include="Controllers\VariableAmbientesController.cs" />

--ESTO VA EN OTRA PARTE <ItemGroup>
    <Content Include="Views\TipoVariableAmbientes\Create.cshtml" />
    <Content Include="Views\TipoVariableAmbientes\Delete.cshtml" />
    <Content Include="Views\TipoVariableAmbientes\Details.cshtml" />
    <Content Include="Views\TipoVariableAmbientes\Edit.cshtml" />
    <Content Include="Views\TipoVariableAmbientes\Index.cshtml" />

    <Content Include="Views\VariableAmbientes\Create.cshtml" />
    <Content Include="Views\VariableAmbientes\Delete.cshtml" />
    <Content Include="Views\VariableAmbientes\Details.cshtml" />
    <Content Include="Views\VariableAmbientes\Edit.cshtml" />
    <Content Include="Views\VariableAmbientes\Index.cshtml" />
        [/ALTERCODE-FRAG]
}