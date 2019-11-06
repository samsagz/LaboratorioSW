using AgroAppDomain;
using AgroAppDomain.Enums;
using AgroAppDomain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiGranja.Controllers
{
    public class AgroApiController : ApiController
    {
        AgroAppDbEntities _db = new AgroAppDbEntities();

        // GET: api/AgroApi
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/AgroApi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AgroApi
        public RegistroResponse Post([FromBody]RegistroRequest nuevoRegistro)
        {
            try
            {
                var dominio = new Class1();

                return new RegistroResponse
                {
                    Mensaje = "OK",
                    Actuadores = dominio.RegistrarValorAmbiente(nuevoRegistro.VariableAmbiente, nuevoRegistro.ModuloId,
                    nuevoRegistro.Valor).Select(a => new Actuador
                    {
                        Activar = a.Activar,
                        NombreActuador = a.NombreActuador
                    }).ToList()
                };
            }
            catch (Exception e)
            {
                return new RegistroResponse
                {
                    Mensaje = "Error - " + e.Message + " ///" + e.InnerException,
                    Actuadores = new List<Actuador>()
                };
            }

        }


        // PUT: api/AgroApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AgroApi/5
        public void Delete(int id)
        {
        }
    }


    public class RegistroRequest
    {
        public string Fecha { get; set; }
        public string VariableAmbiente { get; set; }
        public double Valor { get; set; }
        public int ModuloId { get; set; }
    }

    public class RegistroResponse
    {
        public string Mensaje { get; set; }
        public List<Actuador> Actuadores { get; set; }
    }

    public class Actuador
    {
        public string NombreActuador { get; set; }
        public bool Activar { get; set; }
    }
}