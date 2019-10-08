Fragment ControlAmbiente-AlterAgroAppProj { 
   Action: replace
   Priority: high
   FragmentationPoints: productobject
   PointBracketsLan: c#
   Destinations: ControlAmbiente-Control
   SourceCode: 
        [ALTERCODE-FRAG]
        --ESTO VA EN OTRA PARTE <ItemGroup>
        <Compile Include="Controllers\TipoVariableCuidadoesController.cs" />
        <Compile Include="Controllers\VariableCuidadoesController.cs" />

--ESTO VA EN OTRA PARTE <ItemGroup>
    <Content Include="Views\TipoVariableCuidadoes\Create.cshtml" />
    <Content Include="Views\TipoVariableCuidadoes\Delete.cshtml" />
    <Content Include="Views\TipoVariableCuidadoes\Details.cshtml" />
    <Content Include="Views\TipoVariableCuidadoes\Edit.cshtml" />
    <Content Include="Views\TipoVariableCuidadoes\Index.cshtml" />
    
    <Content Include="Views\VariableCuidadoes\Create.cshtml" />
    <Content Include="Views\VariableCuidadoes\Delete.cshtml" />
    <Content Include="Views\VariableCuidadoes\Details.cshtml" />
    <Content Include="Views\VariableCuidadoes\Edit.cshtml" />
    <Content Include="Views\VariableCuidadoes\Index.cshtml" />
        [/ALTERCODE-FRAG]
}