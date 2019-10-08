Fragment ControlAmbiente-AlterIndex { 
   Action: replace
   Priority: high
   FragmentationPoints: productobject
   PointBracketsLan: c#
   Destinations: Index-Control
   SourceCode: 
        [ALTERCODE-FRAG]
            <h1>@Html.ActionLink("Control Ambiente", "Index", "VariableCuidadoes")  </h1>
        [/ALTERCODE-FRAG]
}