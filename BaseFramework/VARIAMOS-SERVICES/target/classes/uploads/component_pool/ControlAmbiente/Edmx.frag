Fragment ControlAmbiente-EntityType { 
   Action: add
   Priority: high
   FragmentationPoints: tables-entity-type
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntityType Name="TipoVariableAmbiente">
          <Key>
            <PropertyRef Name="TipoVariableAmbienteId" />
          </Key>
          <Property Name="TipoVariableAmbienteId" Type="int" Nullable="false" />
          <Property Name="NombreTipoVariableAmbiente" Type="nvarchar" MaxLength="50" Nullable="false" />
        </EntityType>
        <EntityType Name="VariableAmbiente">
          <Key>
            <PropertyRef Name="VariableAmbienteId" />
          </Key>
          <Property Name="VariableAmbienteId" Type="int" StoreGeneratedPattern="Identity" Nullable="false" />
          <Property Name="ModuloId" Type="int" Nullable="false" />
          <Property Name="TipoVariableAmbienteId" Type="int" Nullable="false" />
          <Property Name="Valor" Type="float" Nullable="false" />
          <Property Name="TimeTag" Type="datetime2" Precision="7" Nullable="false" />
        </EntityType>
        <EntityType Name="VariablesControl">
          <Key>
            <PropertyRef Name="VariableControlId" />
          </Key>
          <Property Name="VariableControlId" Type="int" StoreGeneratedPattern="Identity" Nullable="false" />
          <Property Name="PlantaId" Type="int" Nullable="false" />
          <Property Name="TipoVariableAmbienteId" Type="int" Nullable="false" />
          <Property Name="VariableControl" Type="float" Nullable="false" />
        </EntityType>
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx2 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-association
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <Association Name="FK_VariableAmbiente_Modulo">
          <End Role="Modulo" Type="Self.Modulo" Multiplicity="1" />
          <End Role="VariableAmbiente" Type="Self.VariableAmbiente" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="Modulo">
              <PropertyRef Name="ModuloId" />
            </Principal>
            <Dependent Role="VariableAmbiente">
              <PropertyRef Name="ModuloId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariableAmbiente_TipoVariableAmbiente">
          <End Role="TipoVariableAmbiente" Type="Self.TipoVariableAmbiente" Multiplicity="1" />
          <End Role="VariableAmbiente" Type="Self.VariableAmbiente" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="TipoVariableAmbiente">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Principal>
            <Dependent Role="VariableAmbiente">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariablesControl_Planta">
          <End Role="Planta" Type="Self.Planta" Multiplicity="1" />
          <End Role="VariablesControl" Type="Self.VariablesControl" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="Planta">
              <PropertyRef Name="PlantaId" />
            </Principal>
            <Dependent Role="VariablesControl">
              <PropertyRef Name="PlantaId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariablesControl_TipoVariableAmbiente">
          <End Role="TipoVariableAmbiente" Type="Self.TipoVariableAmbiente" Multiplicity="1" />
          <End Role="VariablesControl" Type="Self.VariablesControl" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="TipoVariableAmbiente">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Principal>
            <Dependent Role="VariablesControl">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx3 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-entitySet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
          <EntitySet Name="TipoVariableAmbiente" EntityType="Self.TipoVariableAmbiente" Schema="dbo" store:Type="Tables" />
          <EntitySet Name="VariableAmbiente" EntityType="Self.VariableAmbiente" Schema="dbo" store:Type="Tables" />
          <EntitySet Name="VariablesControl" EntityType="Self.VariablesControl" Schema="dbo" store:Type="Tables" />
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx31 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-associationSet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
          <AssociationSet Name="FK_VariableAmbiente_Modulo" Association="Self.FK_VariableAmbiente_Modulo">
            <End Role="Modulo" EntitySet="Modulo" />
            <End Role="VariableAmbiente" EntitySet="VariableAmbiente" />
          </AssociationSet>
          <AssociationSet Name="FK_VariableAmbiente_TipoVariableAmbiente" Association="Self.FK_VariableAmbiente_TipoVariableAmbiente">
            <End Role="TipoVariableAmbiente" EntitySet="TipoVariableAmbiente" />
            <End Role="VariableAmbiente" EntitySet="VariableAmbiente" />
          </AssociationSet>
          <AssociationSet Name="FK_VariablesControl_Planta" Association="Self.FK_VariablesControl_Planta">
            <End Role="Planta" EntitySet="Planta" />
            <End Role="VariablesControl" EntitySet="VariablesControl" />
          </AssociationSet>
          <AssociationSet Name="FK_VariablesControl_TipoVariableAmbiente" Association="Self.FK_VariablesControl_TipoVariableAmbiente">
            <End Role="TipoVariableAmbiente" EntitySet="TipoVariableAmbiente" />
            <End Role="VariablesControl" EntitySet="VariablesControl" />
          </AssociationSet>
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx9 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-ModuloNavigationProperty
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
          <NavigationProperty Name="VariableAmbiente" Relationship="Self.FK_VariableAmbiente_Modulo" FromRole="Modulo" ToRole="VariableAmbiente" />
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx91 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-PlantaNavigationProperty
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
          <NavigationProperty Name="VariablesControl" Relationship="Self.FK_VariablesControl_Planta" FromRole="Planta" ToRole="VariablesControl" />
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx4 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-entityType
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntityType Name="TipoVariableAmbiente">
          <Key>
            <PropertyRef Name="TipoVariableAmbienteId" />
          </Key>
          <Property Name="TipoVariableAmbienteId" Type="Int32" Nullable="false" />
          <Property Name="NombreTipoVariableAmbiente" Type="String" MaxLength="50" FixedLength="false" Unicode="true" Nullable="false" />
          <NavigationProperty Name="VariableAmbiente" Relationship="Self.FK_VariableAmbiente_TipoVariableAmbiente" FromRole="TipoVariableAmbiente" ToRole="VariableAmbiente" />
          <NavigationProperty Name="VariablesControl" Relationship="Self.FK_VariablesControl_TipoVariableAmbiente" FromRole="TipoVariableAmbiente" ToRole="VariablesControl" />
        </EntityType>
        <EntityType Name="VariableAmbiente">
          <Key>
            <PropertyRef Name="VariableAmbienteId" />
          </Key>
          <Property Name="VariableAmbienteId" Type="Int32" Nullable="false" annotation:StoreGeneratedPattern="Identity" />
          <Property Name="ModuloId" Type="Int32" Nullable="false" />
          <Property Name="TipoVariableAmbienteId" Type="Int32" Nullable="false" />
          <Property Name="Valor" Type="Double" Nullable="false" />
          <Property Name="TimeTag" Type="DateTime" Nullable="false" Precision="7" />
          <NavigationProperty Name="Modulo" Relationship="Self.FK_VariableAmbiente_Modulo" FromRole="VariableAmbiente" ToRole="Modulo" />
          <NavigationProperty Name="TipoVariableAmbiente" Relationship="Self.FK_VariableAmbiente_TipoVariableAmbiente" FromRole="VariableAmbiente" ToRole="TipoVariableAmbiente" />
        </EntityType>
        <EntityType Name="VariablesControl">
          <Key>
            <PropertyRef Name="VariableControlId" />
          </Key>
          <Property Name="VariableControlId" Type="Int32" Nullable="false" annotation:StoreGeneratedPattern="Identity" />
          <Property Name="PlantaId" Type="Int32" Nullable="false" />
          <Property Name="TipoVariableAmbienteId" Type="Int32" Nullable="false" />
          <Property Name="VariableControl" Type="Double" Nullable="false" />
          <NavigationProperty Name="Planta" Relationship="Self.FK_VariablesControl_Planta" FromRole="VariablesControl" ToRole="Planta" />
          <NavigationProperty Name="TipoVariableAmbiente" Relationship="Self.FK_VariablesControl_TipoVariableAmbiente" FromRole="VariablesControl" ToRole="TipoVariableAmbiente" />
        </EntityType>
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx5 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-association
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <Association Name="FK_VariableAmbiente_Modulo">
          <End Role="Modulo" Type="Self.Modulo" Multiplicity="1" />
          <End Role="VariableAmbiente" Type="Self.VariableAmbiente" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="Modulo">
              <PropertyRef Name="ModuloId" />
            </Principal>
            <Dependent Role="VariableAmbiente">
              <PropertyRef Name="ModuloId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariablesControl_Planta">
          <End Role="Planta" Type="Self.Planta" Multiplicity="1" />
          <End Role="VariablesControl" Type="Self.VariablesControl" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="Planta">
              <PropertyRef Name="PlantaId" />
            </Principal>
            <Dependent Role="VariablesControl">
              <PropertyRef Name="PlantaId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariableAmbiente_TipoVariableAmbiente">
          <End Role="TipoVariableAmbiente" Type="Self.TipoVariableAmbiente" Multiplicity="1" />
          <End Role="VariableAmbiente" Type="Self.VariableAmbiente" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="TipoVariableAmbiente">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Principal>
            <Dependent Role="VariableAmbiente">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        <Association Name="FK_VariablesControl_TipoVariableAmbiente">
          <End Role="TipoVariableAmbiente" Type="Self.TipoVariableAmbiente" Multiplicity="1" />
          <End Role="VariablesControl" Type="Self.VariablesControl" Multiplicity="*" />
          <ReferentialConstraint>
            <Principal Role="TipoVariableAmbiente">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Principal>
            <Dependent Role="VariablesControl">
              <PropertyRef Name="TipoVariableAmbienteId" />
            </Dependent>
          </ReferentialConstraint>
        </Association>
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx6 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-entitySet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
        <EntitySet Name="TipoVariableAmbiente" EntityType="Self.TipoVariableAmbiente" />
        <EntitySet Name="VariableAmbiente" EntityType="Self.VariableAmbiente" />
        <EntitySet Name="VariablesControl" EntityType="Self.VariablesControl" />
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx7 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-associationSet
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
          <AssociationSet Name="FK_VariableAmbiente_Modulo" Association="Self.FK_VariableAmbiente_Modulo">
            <End Role="Modulo" EntitySet="Modulo" />
            <End Role="VariableAmbiente" EntitySet="VariableAmbiente" />
          </AssociationSet>
          <AssociationSet Name="FK_VariablesControl_Planta" Association="Self.FK_VariablesControl_Planta">
            <End Role="Planta" EntitySet="Planta" />
            <End Role="VariablesControl" EntitySet="VariablesControl" />
          </AssociationSet>
          <AssociationSet Name="FK_VariableAmbiente_TipoVariableAmbiente" Association="Self.FK_VariableAmbiente_TipoVariableAmbiente">
            <End Role="TipoVariableAmbiente" EntitySet="TipoVariableAmbiente" />
            <End Role="VariableAmbiente" EntitySet="VariableAmbiente" />
          </AssociationSet>
          <AssociationSet Name="FK_VariablesControl_TipoVariableAmbiente" Association="Self.FK_VariablesControl_TipoVariableAmbiente">
            <End Role="TipoVariableAmbiente" EntitySet="TipoVariableAmbiente" />
            <End Role="VariablesControl" EntitySet="VariablesControl" />
          </AssociationSet>
        [/ALTERCODE-FRAG]
}

Fragment ControlAmbiente-Edmx8 { 
   Action: add
   Priority: high
   FragmentationPoints: tables-csdl-entitySetMapping
   PointBracketsLan: html
   Destinations: Model-AgroAppModel
   SourceCode: 
        [ALTERCODE-FRAG]
          <EntitySetMapping Name="TipoVariableAmbiente">
            <EntityTypeMapping TypeName="AgroAppDbModel.TipoVariableAmbiente">
              <MappingFragment StoreEntitySet="TipoVariableAmbiente">
                <ScalarProperty Name="TipoVariableAmbienteId" ColumnName="TipoVariableAmbienteId" />
                <ScalarProperty Name="NombreTipoVariableAmbiente" ColumnName="NombreTipoVariableAmbiente" />
              </MappingFragment>
            </EntityTypeMapping>
          </EntitySetMapping>
          <EntitySetMapping Name="VariableAmbiente">
            <EntityTypeMapping TypeName="AgroAppDbModel.VariableAmbiente">
              <MappingFragment StoreEntitySet="VariableAmbiente">
                <ScalarProperty Name="VariableAmbienteId" ColumnName="VariableAmbienteId" />
                <ScalarProperty Name="ModuloId" ColumnName="ModuloId" />
                <ScalarProperty Name="TipoVariableAmbienteId" ColumnName="TipoVariableAmbienteId" />
                <ScalarProperty Name="Valor" ColumnName="Valor" />
                <ScalarProperty Name="TimeTag" ColumnName="TimeTag" />
              </MappingFragment>
            </EntityTypeMapping>
          </EntitySetMapping>
          <EntitySetMapping Name="VariablesControl">
            <EntityTypeMapping TypeName="AgroAppDbModel.VariablesControl">
              <MappingFragment StoreEntitySet="VariablesControl">
                <ScalarProperty Name="VariableControlId" ColumnName="VariableControlId" />
                <ScalarProperty Name="PlantaId" ColumnName="PlantaId" />
                <ScalarProperty Name="TipoVariableAmbienteId" ColumnName="TipoVariableAmbienteId" />
                <ScalarProperty Name="VariableControl" ColumnName="VariableControl" />
              </MappingFragment>
            </EntityTypeMapping>
          </EntitySetMapping>
        [/ALTERCODE-FRAG]
}


