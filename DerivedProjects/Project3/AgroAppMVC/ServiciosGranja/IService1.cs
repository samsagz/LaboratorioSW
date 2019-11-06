using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace ServiciosGranja
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IService1" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface IService1
    {
        [WebGet(UriTemplate = "/GetDataTest",
            BodyStyle = WebMessageBodyStyle.WrappedResponse,
            ResponseFormat = WebMessageFormat.Json)]
        string GetDataTest();

        [WebGet(UriTemplate = "/GetData?value={value}",
            BodyStyle = WebMessageBodyStyle.WrappedResponse,
            ResponseFormat = WebMessageFormat.Json)]
        string GetData(int value);

        [OperationContract]
        [WebInvoke(UriTemplate = "/GetDataUsingDataContract",
            BodyStyle = WebMessageBodyStyle.WrappedResponse,
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        CompositeType GetDataUsingDataContract(CompositeType composite);

        // TODO: agregue aquí sus operaciones de servicio
    }


    // Utilice un contrato de datos, como se ilustra en el ejemplo siguiente, para agregar tipos compuestos a las operaciones de servicio.
    [DataContract]
    public class CompositeType
    {
        bool boolValue = true;
        string stringValue = "Hello ";

        [DataMember]
        public bool BoolValue
        {
            get { return boolValue; }
            set { boolValue = value; }
        }

        [DataMember]
        public string StringValue
        {
            get { return stringValue; }
            set { stringValue = value; }
        }
    }
}
