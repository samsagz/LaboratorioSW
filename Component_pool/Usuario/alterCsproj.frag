Fragment Usuario-AlterCsproj { 
   Action: add
   Priority: high
   FragmentationPoints: project-content
   PointBracketsLan: html
   Destinations: CSProjectConfig-AgroAppMVC
   SourceCode: 
        [ALTERCODE-FRAG]
        <Content Include="Views\Usuarios\Create.cshtml" />
        <Content Include="Views\Usuarios\Delete.cshtml" />
        <Content Include="Views\Usuarios\Details.cshtml" />
        <Content Include="Views\Usuarios\Edit.cshtml" />
        <Content Include="Views\Usuarios\Index.cshtml" />
        [/ALTERCODE-FRAG]
}

Fragment Usuario-AlterCsproj { 
   Action: add
   Priority: high
   FragmentationPoints: project-compile
   PointBracketsLan: html
   Destinations: CSProjectConfig-AgroAppMVC
   SourceCode: 
        [ALTERCODE-FRAG]
        <Compile Include="Controllers\UsuariosController.cs" />
        [/ALTERCODE-FRAG]
}