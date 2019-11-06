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
            result.variables_control = moduloDB.Planta.VariablesControl
                                    .ToDictionary(a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente,
                                                    b => b.VariableControl.ToString(),
                                                    StringComparer.OrdinalIgnoreCase);

            result.variables_cuidado = moduloDB.Planta.VariableCuidado
                                    .ToDictionary(a => a.TipoVariableCuidado.NombreTipoVariableCuidado,
                                                    b => b.ValorCuidado,
                                                    StringComparer.OrdinalIgnoreCase);


            return result;

            /*
            //frijol
            var modulo = new ModuloResult
            {
                id = 1,
                nombre = "Frijol",
                modulos = new Dictionary<string, int>
                {
                    {"Frijol",1 },
                    {"Zanahoria", 2 }
                },
                info_general = new Dictionary<string, string>
                    {
                        { "Cantidad de Plantas", "12" },
                        { "Fecha de Siembra", "10/10/2019" },
                        { "Fecha estimada", "15/10/2019" },
                        { "Fecha Real", "30/10/2019" },
                        { "Solución Nutricional", "Lo nutricional del Frijol" }
                    },
                variables_control = new Dictionary<string, string>
                    {
                        { "Luz" , 18 },
                        { "Temperatura", 25 },
                        { "Humedad" , 39 }
                    },
                variables_cuidado = new Dictionary<string, string>
                    {
                        { "Pesticidas" , "Una vez por semana" },
                        { "Riego" , "Día por medio"},
                        { "Fertilizantes" , "Dos veces por semana" }
                    }

            };
            */

        }

        public ValoresAmbienteResult ValoresAmbiente(int id)
        {
            var moduldoDB = _db.Modulo.First(a => a.ModuloId == id);

            var result = new ValoresAmbienteResult
            {
                id = moduldoDB.ModuloId,
                variables_ambiente = moduldoDB.VariableAmbiente.GroupBy(g => g.TipoVariableAmbienteId)
                                                .Select(s => s.OrderByDescending(odb => odb.TimeTag)
                                                            .FirstOrDefault()
                                                        )
                                                .ToDictionary(
                                                            a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente,
                                                            b => b.Valor,
                                                            StringComparer.OrdinalIgnoreCase)
            };

            /*
            var result = new ValoresAmbienteResult
            {
                id = 1,
                variables_ambiente = new Dictionary<string, double>
                {
                    {"Luz",21.3 },
                    {"Temperatura",30.1 },
                    {"Humedad",2.3 },
                }
            };
            */

            return result;
        }

        public List<GraficaAmbienteResult> GraficarAmbiente(int id, string tipoVariable)
        {
            var moduldoDB = _db.Modulo.First(a => a.ModuloId == id);

            var result = moduldoDB.VariableAmbiente
                .Where(a => a.TipoVariableAmbiente.NombreTipoVariableAmbiente == tipoVariable)
                .OrderByDescending(a => a.TimeTag)
                .Select(b => new GraficaAmbienteResult
                {
                    captura = b.VariableAmbienteId.ToString(),
                    valor = b.Valor
                }).Take(10).ToList();

            return result;

            /*
            var result = new List<GraficaAmbienteResult>
            {
                new GraficaAmbienteResult {
                    captura= "1",
                    valor= 100
                },
                new GraficaAmbienteResult {
                    captura= "2",
                    valor= 60
                },
                new GraficaAmbienteResult {
                    captura= "3",
                    valor= 30
                },
                new GraficaAmbienteResult {
                    captura= "4",
                    valor= 110
                }
            };
            */
        }

    }
}
