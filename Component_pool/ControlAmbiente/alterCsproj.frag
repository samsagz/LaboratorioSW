Fragment ControlAmbiente-AlterCsproj1 { 
   Action: add
   Priority: high
   FragmentationPoints: project-content
   PointBracketsLan: html
   Destinations: CSProjectConfig-AgroAppMVC
   SourceCode: 
        [ALTERCODE-FRAG]
        <Content Include="Views\TipoVariableAmbientes\Create.cshtml" />
        <Content Include="Views\TipoVariableAmbientes\Delete.cshtml" />
        <Content Include="Views\TipoVariableAmbientes\Details.cshtml" />
        <Content Include="Views\TipoVariableAmbientes\Edit.cshtml" />
        <Content Include="Views\TipoVariableAmbientes\Index.cshtml" />
        <Content Include="Views\VariablesControls\Create.cshtml" />
        <Content Include="Views\VariablesControls\Delete.cshtml" />
        <Content Include="Views\VariablesControls\Details.cshtml" />
        <Content Include="Views\VariablesControls\Edit.cshtml" />
        <Content Include="Views\VariablesControls\Index.cshtml" />
        <Content Include="Views\VariableAmbientes\Create.cshtml" />
        <Content Include="Views\VariableAmbientes\Delete.cshtml" />
        <Content Include="Views\VariableAmbientes\Details.cshtml" />
        <Content Include="Views\VariableAmbientes\Edit.cshtml" />
        <Content Include="Views\VariableAmbientes\Index.cshtml" />
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-AlterCsproj2 { 
   Action: add
   Priority: high
   FragmentationPoints: project-compile
   PointBracketsLan: html
   Destinations: CSProjectConfig-AgroAppMVC
   SourceCode: 
        [ALTERCODE-FRAG]
         <Compile Include="Controllers\TipoVariableAmbientesController.cs" />
         <Compile Include="Controllers\VariableAmbientesController.cs" />
         <Compile Include="Controllers\VariablesControlsController.cs" />
        [/ALTERCODE-FRAG]
}