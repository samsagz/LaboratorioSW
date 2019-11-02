using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgroAppDomain.Model.Response
{
    public class ModuloResult
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public Dictionary<string,int> modulos { get; set; }
        public Dictionary<string,string> info_general { get; set; }
        public Dictionary<string,int> variables_control { get; set; }
        public Dictionary<string,string> variables_cuidado { get; set; }

    }
}

/*
 new 
            {
                id = 1,
                nombre = "Frijol",
                info_general = new Dictionary<string, string>
                    {
                        //{ "id" , "1" },
                        //{ "Nombre", "Frijol" },
                        { "Cantidad de Plantas", "12" },
                        { "Fecha de Siembra", "10/10/2019" },
                        { "Fecha estimada", "15/10/2019" },
                        { "Fecha Real", "30/10/2019" },
                        { "Solución Nutricional", "Lo nutricional del Frijol" }
                    },
                variables_ambiente = new Dictionary<string, int>
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
            }
     
     */
