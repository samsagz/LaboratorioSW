using AgroAppDomain.Enums;
using AgroAppDomain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgroAppDomain
{
    public class Class1
    {
        AgroAppDbEntities _db = new AgroAppDbEntities();
        public List<Actuador> RegistrarValorAmbiente(string nombreVariableAmbiente, int moduloId, double valor)
        {
            Enum.TryParse(nombreVariableAmbiente, out ETipoVariableAmbiente tipoVariableAmbiente);

            _db.VariableAmbiente.Add(new VariableAmbiente
            {
                ModuloId = moduloId,
                TimeTag = DateTime.Now,
                TipoVariableAmbienteId = (int)tipoVariableAmbiente,
                Valor = valor
            });

            _db.SaveChanges();

            return new List<Actuador>();

        }
    }

    public class Actuador
    {
        public string NombreActuador { get; set; }
        public bool Activar { get; set; }
    }
}
