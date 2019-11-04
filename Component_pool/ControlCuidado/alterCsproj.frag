Fragment ControlCuidado-AlterCsproj1 { 
   Action: add
   Priority: high
   FragmentationPoints: project-content
   PointBracketsLan: html
   Destinations: CSProjectConfig-AgroAppMVC
   SourceCode: 
        [ALTERCODE-FRAG]
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

Fragment ControlCuidado-AlterCsproj2 { 
   Action: add
   Priority: high
   FragmentationPoints: project-compile
   PointBracketsLan: html
   Destinations: CSProjectConfig-AgroAppMVC
   SourceCode: 
        [ALTERCODE-FRAG]
        <Compile Include="Controllers\TipoVariableCuidadoesController.cs" />
        <Compile Include="Controllers\VariableCuidadoesController.cs" />
        [/ALTERCODE-FRAG]
}