Fragment Papa-AlterDataBase { 
   Action: add
   Priority: high
   FragmentationPoints: tables-sql
   PointBracketsLan: sql
   Destinations: DataBase-ScriptsDB
   SourceCode: 
        [ALTERCODE-FRAG]
INSERT INTO Planta (NombrePlanta, SemanasCosecha) VALUES
('Papa', 20);

DECLARE @Id INT = SCOPE_IDENTITY()

INSERT INTO Modulo(PlantaId, FechaSiembra, FechaEstimadaCosecha, SolucionNutricional) VALUES
(@Id ,GETDATE(),DATEADD(week, (SELECT SemanasCosecha From Planta WHERE PlantaId = @Id),GETDATE()), 15);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,1, 19);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,2, 87);

INSERT INTO VariablesControl(PlantaId, TipoVariableAmbienteId,

VariableControl) VALUES (@Id ,3, 12);
        [/ALTERCODE-FRAG]
}