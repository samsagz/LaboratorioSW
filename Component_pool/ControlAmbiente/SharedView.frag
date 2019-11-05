Fragment ControlAmbiente-SharedView { 
   Action: add
   Priority: high
   FragmentationPoints: topbar-modulo
   PointBracketsLan: html
   Destinations: SharedView-_Layout
   SourceCode: 
        [ALTERCODE-FRAG]
        <li class="nav-item mx-0 mx-lg-1">
            @Html.ActionLink("Control Ambiente", "Index", "VariableAmbientes", new { @Class = "nav-link py-3 px-0 px-lg-3 rounded" })
        </li>
        [/ALTERCODE-FRAG]
}