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


            return result;

        }

        public ValoresAmbienteResult ValoresAmbiente(int id)
        {
            var moduldoDB = _db.Modulo.First(a => a.ModuloId == id);

            ValoresAmbienteResult result = new ValoresAmbienteResult
            {
                id = moduldoDB.ModuloId
                /*B-variables-ambiente*/
                ,variables_ambiente = new Dictionary<string,double>()
                /*E-variables-ambiente*/
            };

            return result;
        }

        public List<GraficaAmbienteResult> GraficarAmbiente(int id, string tipoVariable)
        {
            var moduldoDB = _db.Modulo.First(a => a.ModuloId == id);

            var result = new List<GraficaAmbienteResult>();
            /*B-graficar-ambiente*/
            
            return result;

        }

    }
}
