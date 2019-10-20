using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using AgroAppDomain.Enum;
using AgroAppDomain.Model;

namespace ServiciosGranja
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de clase "AgroAppService" en el código, en svc y en el archivo de configuración a la vez.
    // NOTA: para iniciar el Cliente de prueba WCF para probar este servicio, seleccione AgroAppService.svc o AgroAppService.svc.cs en el Explorador de soluciones e inicie la depuración.
    public class AgroAppService : IAgroAppService
    {
        AgroAppDbEntities _db = new AgroAppDbEntities();
        public RegistroResponse RegistrarValorGranja(RegistroRequest nuevoRegistro)
        {
            try
            {
                Enum.TryParse(nuevoRegistro.VariableAmbiente, out ETipoVariableAmbiente tipoVariableAmbiente);

                _db.VariableAmbiente.Add(new VariableAmbiente
                {
                    ModuloId = nuevoRegistro.ModuloId,
                    TimeTag = DateTime.Now,
                    TipoVariableAmbienteId = (int)tipoVariableAmbiente,
                    Valor = nuevoRegistro.Valor
                });

                _db.SaveChanges();

                return new RegistroResponse
                {
                    Mensaje = "OK",
                    Actuadores = new List<Actuador>()
                };
            }
            catch (Exception e)
            {
                return new RegistroResponse
                {
                    Mensaje = "Error - "+e.InnerException,
                    Actuadores = new List<Actuador>()
                };
            }
        }
    }
}
