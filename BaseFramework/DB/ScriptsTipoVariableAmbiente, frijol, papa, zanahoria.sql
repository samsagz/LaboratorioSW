
INSERT INTO TipoVariableAmbiente (TipoVariableAmbienteId, NombreTipoVariableAmbiente) VALUES
(1,'Temperatura');
INSERT INTO TipoVariableAmbiente (TipoVariableAmbienteId, NombreTipoVariableAmbiente) VALUES
(2,'Humedad');
INSERT INTO TipoVariableAmbiente (TipoVariableAmbienteId, NombreTipoVariableAmbiente) VALUES
(3,'Luminosidad');

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