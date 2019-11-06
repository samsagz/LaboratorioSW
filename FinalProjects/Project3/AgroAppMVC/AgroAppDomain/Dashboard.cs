using AgroAppDomain.Model;
using AgroAppDomain.Model.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgroAppDomain
{
    public class Dashboard
    {
        private AgroAppDbEntities _db = new AgroAppDbEntities();
        public int ModuloDefault()
        {
            return _db.Modulo.First().ModuloId;
        }

        public ModuloResult DatosBasicos(int id)
        {
            //var result = new List<ModuloResult>();
            var moduloDB = _db.Modulo.First(a => a.ModuloId == id);
            var result = new ModuloResult
            {
                id = moduloDB.ModuloId,
                nombre = moduloDB.Planta.NombrePlanta,
                modulos = _db.Modulo.ToDictionary(b => b.ModuloId.ToString(), a => a.Planta.NombrePlanta),
            };
            result.info_general = new Dictionary<string, string>
                    {
                        { "Cantidad de Plantas", moduloDB.NumeroPlantas.ToString() },
                        { "Fecha de Siembra", ((DateTime)moduloDB.FechaSiembra).ToString("dd/MM/yyyy") },
                        { "Fecha estimada", ((DateTime)moduloDB.FechaEstimadaCosecha).ToString("dd/MM/yyyy") },
                        { "Fecha Real",  moduloDB.FechaRealCosecha == null? "Pendiente":((DateTime)moduloDB.FechaRealCosecha).ToString("dd/MM/yyyy") },
                        { "Solución Nutricional", moduloDB.SolucionNutricional?.ToString() }
                    };
            /*B-control-variables*/

/*Code injected by: ControlCuidado-Dashboard1*/
result.variables_cuidado = moduloDB.Planta.VariableCuidado
                                    .ToDictionary(a => a.TipoVariableCuidado.NombreTipoVariableCuidado,
                                                    b => b.ValorCuidado,
                                                    StringComparer.OrdinalIgnoreCase);
/*Code injected by: ControlCuidado-Dashboard1*/


/*Code injected by: ControlAmbiente-Dashboard1*/
result.variables_control = moduloDB.Planta.VariablesControl
                                    .ToDictionary(a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente,
                                                    b => b.VariableControl.ToString(),
                                                    StringComparer.OrdinalIgnoreCase);
/*Code injected by: ControlAmbiente-Dashboard1*/


            return result;

        }

        public ValoresAmbienteResult ValoresAmbiente(int id)
        {
            var moduldoDB = _db.Modulo.First(a => a.ModuloId == id);

            ValoresAmbienteResult result = new ValoresAmbienteResult
            {
                id = moduldoDB.ModuloId
                /*B-variables-ambiente*/

/*Code replaced by: ControlAmbiente-Dashboard2*/
,variables_ambiente = moduldoDB.VariableAmbiente.GroupBy(g => g.TipoVariableAmbienteId)
                                                .Select(s => s.OrderByDescending(odb => odb.TimeTag)
                                                            .FirstOrDefault()
                                                        )
                                                .ToDictionary(
                                                            a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente,
                                                            b => b.Valor,
                                                            StringComparer.OrdinalIgnoreCase)
/*Code replaced by: ControlAmbiente-Dashboard2*/
/*E-variables-ambiente*/
            };

            return result;
        }

        public List<GraficaAmbienteResult> GraficarAmbiente(int id, string tipoVariable)
        {
            var moduldoDB = _db.Modulo.First(a => a.ModuloId == id);

            var result = new List<GraficaAmbienteResult>();
            /*B-graficar-ambiente*/

/*Code injected by: ControlAmbiente-Dashboard3*/
moduldoDB.VariableAmbiente
                .Where(a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente == tipoVariable)
                .OrderByDescending(a => a.TimeTag)
                .Select(b => new GraficaAmbienteResult
                {
                    captura = b.VariableAmbienteId.ToString(),
                    valor = b.Valor
                }).Take(10).ToList();
/*Code injected by: ControlAmbiente-Dashboard3*/

            
            return result;

        }

    }
}
