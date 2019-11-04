Fragment Zanahoria-AlterDataBase { 
   Action: add
   Priority: high
   FragmentationPoints: tables-sql
   PointBracketsLan: sql
   Destinations: DataBase-ScriptsDB
   SourceCode: 
        [ALTERCODE-FRAG]        
INSERT INTO Planta (NombrePlanta, SemanasCosecha) VALUES
('Zanahoria', 16);

DECLARE @Id INT = SCOPE_IDENTITY()

INSERT INTO Modulo(PlantaId, FechaSiembra, FechaEstimadaCosecha, SolucionNutricional) VALUES
(@Id ,GETDATE(),DATEADD(week, (SELECT SemanasCosecha From Planta WHERE PlantaId = @Id),GETDATE()), 11);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,1, 15);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,2, 75);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,3, 16);
        [/ALTERCODE-FRAG]
}