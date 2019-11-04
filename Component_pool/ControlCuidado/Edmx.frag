Fragment ControlCuidado-Edmx1 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-entity-type
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntityType Name="TipoVariableCuidado">
          <Key>
            <PropertyRef Name="TipoVariableCuidadoId" />
          </Key>
          <Property Name="TipoVariableCuidadoId" Type="int" StoreGeneratedPattern="Identity" Nullable="false" />
          <Property Name="NombreTipoVariableCuidado" Type="nvarchar" MaxLength="50" Nullable="false" />
        </EntityType>
        <EntityType Name="VariableCuidado">
          <Key>
            <PropertyRef Name="VariablesCuidadoId" />
          </Key>
          <Property Name="VariablesCuidadoId" Type="int" StoreGeneratedPattern="Identity" Nullable="false" />
          <Property Name="TipoVariableCuidadoId" Type="int" Nullable="false" />
          <Property Name="ValorCuidado" Type="nvarchar" MaxLength="400" Nullable="false" />
          <Property Name="PlantaId" Type="int" Nullable="false" />
        </EntityType>
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx2 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-association
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <Association Name="FK_VariableCuidado_Planta">
          <End Role="Planta" Type="Self.Planta" Multiplicity="1" />
          <End Role="VariableCuidado" Type="Self.VariableCuidado" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="Planta">
              <PropertyRef Name="PlantaId" />
            </Principal>
            <Dependent Role="VariableCuidado">
              <PropertyRef Name="PlantaId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariableCuidado_TipoVariableCuidado">
          <End Role="TipoVariableCuidado" Type="Self.TipoVariableCuidado" Multiplicity="1" />
          <End Role="VariableCuidado" Type="Self.VariableCuidado" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="TipoVariableCuidado">
              <PropertyRef Name="TipoVariableCuidadoId" />
            </Principal>
            <Dependent Role="VariableCuidado">
              <PropertyRef Name="TipoVariableCuidadoId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx3 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-entitySet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntitySet Name="TipoVariableCuidado" EntityType="Self.TipoVariableCuidado" Schema="dbo" store:Type="Tables" />
        <EntitySet Name="VariableCuidado" EntityType="Self.VariableCuidado" Schema="dbo" store:Type="Tables" />
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx4 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-entityType
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntityType Name="TipoVariableCuidado">
          <Key>
            <PropertyRef Name="TipoVariableCuidadoId" />
          </Key>
          <Property Name="TipoVariableCuidadoId" Type="Int32" Nullable="false" annotation:StoreGeneratedPattern="Identity" />
          <Property Name="NombreTipoVariableCuidado" Type="String" MaxLength="50" FixedLength="false" Unicode="true" Nullable="false" />
          <NavigationProperty Name="VariableCuidado" Relationship="Self.FK_VariableCuidado_TipoVariableCuidado" FromRole="TipoVariableCuidado" ToRole="VariableCuidado" />
        </EntityType>
        <EntityType Name="VariableCuidado">
          <Key>
            <PropertyRef Name="VariablesCuidadoId" />
          </Key>
          <Property Name="VariablesCuidadoId" Type="Int32" Nullable="false" annotation:StoreGeneratedPattern="Identity" />
          <Property Name="TipoVariableCuidadoId" Type="Int32" Nullable="false" />
          <Property Name="ValorCuidado" Type="String" Nullable="false" FixedLength="false" MaxLength="400" Unicode="true" />
          <Property Name="PlantaId" Type="Int32" Nullable="false" />
          <NavigationProperty Name="Planta" Relationship="Self.FK_VariableCuidado_Planta" FromRole="VariableCuidado" ToRole="Planta" />
          <NavigationProperty Name="TipoVariableCuidado" Relationship="Self.FK_VariableCuidado_TipoVariableCuidado" FromRole="VariableCuidado" ToRole="TipoVariableCuidado" />
        </EntityType>
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx5 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-association
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <Association Name="FK_VariableCuidado_Planta">
          <End Role="Planta" Type="Self.Planta" Multiplicity="1" />
          <End Role="VariableCuidado" Type="Self.VariableCuidado" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="Planta">
              <PropertyRef Name="PlantaId" />
            </Principal>
            <Dependent Role="VariableCuidado">
              <PropertyRef Name="PlantaId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariableCuidado_TipoVariableCuidado">
          <End Role="TipoVariableCuidado" Type="Self.TipoVariableCuidado" Multiplicity="1" />
          <End Role="VariableCuidado" Type="Self.VariableCuidado" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="TipoVariableCuidado">
              <PropertyRef Name="TipoVariableCuidadoId" />
            </Principal>
            <Dependent Role="VariableCuidado">
              <PropertyRef Name="TipoVariableCuidadoId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx6 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-entitySet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntitySet Name="TipoVariableCuidado" EntityType="Self.TipoVariableCuidado" />
        <EntitySet Name="VariableCuidado" EntityType="Self.VariableCuidado" />
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx7 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-associationSet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <AssociationSet Name="FK_VariableCuidado_Planta" Association="Self.FK_VariableCuidado_Planta">
        <End Role="Planta" EntitySet="Planta" />
        <End Role="VariableCuidado" EntitySet="VariableCuidado" />
        </AssociationSet>
        <AssociationSet Name="FK_VariableCuidado_TipoVariableCuidado" Association="Self.FK_VariableCuidado_TipoVariableCuidado">
        <End Role="TipoVariableCuidado" EntitySet="TipoVariableCuidado" />
        <End Role="VariableCuidado" EntitySet="VariableCuidado" />
        </AssociationSet>
        [/ALTERCODE-FRAG]
}

Fragment ControlCuidado-Edmx8 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-entitySetMapping
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntitySetMapping Name="TipoVariableCuidado">
            <EntityTypeMapping TypeName="AgroAppDbModel.TipoVariableCuidado">
              <MappingFragment StoreEntitySet="TipoVariableCuidado">
                <ScalarProperty Name="TipoVariableCuidadoId" ColumnName="TipoVariableCuidadoId" />
                <ScalarProperty Name="NombreTipoVariableCuidado" ColumnName="NombreTipoVariableCuidado" />
              </MappingFragment>
            </EntityTypeMapping>
          </EntitySetMapping>
          <EntitySetMapping Name="VariableCuidado">
            <EntityTypeMapping TypeName="AgroAppDbModel.VariableCuidado">
              <MappingFragment StoreEntitySet="VariableCuidado">
                <ScalarProperty Name="VariablesCuidadoId" ColumnName="VariablesCuidadoId" />
                <ScalarProperty Name="TipoVariableCuidadoId" ColumnName="TipoVariableCuidadoId" />
                <ScalarProperty Name="ValorCuidado" ColumnName="ValorCuidado" />
                <ScalarProperty Name="PlantaId" ColumnName="PlantaId" />
              </MappingFragment>
            </EntityTypeMapping>
        </EntitySetMapping>
        [/ALTERCODE-FRAG]
}