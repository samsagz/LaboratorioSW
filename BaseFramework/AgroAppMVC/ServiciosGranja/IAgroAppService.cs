using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace ServiciosGranja
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IAgroAppService" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface IAgroAppService
    {
        [OperationContract]
        [WebInvoke(UriTemplate = "/RegistrarValorGranja",
            BodyStyle = WebMessageBodyStyle.WrappedResponse,
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        RegistroResponse RegistrarValorGranja(RegistroRequest nuevoRegistro);
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
