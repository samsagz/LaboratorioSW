Fragment Frijol-AlterDataBase { 
   Action: add
   Priority: high
   FragmentationPoints: tables-sql
   PointBracketsLan: sql
   Destinations: DataBase-ScriptsDB
   SourceCode: 
        [ALTERCODE-FRAG]
        INSERT INTO Planta (NombrePlanta, SemanasCosecha) VALUES
('Frijol', 10);

DECLARE @Id INT = SCOPE_IDENTITY()

INSERT INTO Modulo(PlantaId, FechaSiembra, FechaEstimadaCosecha, SolucionNutricional) VALUES
(@Id ,GETDATE(),DATEADD(week, (SELECT SemanasCosecha From Planta WHERE PlantaId = @Id),GETDATE()), 7);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,1, 24);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,2, 70);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,3, 18);
        [/ALTERCODE-FRAG]
}