using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgroAppDomain.Model.Response
{
    public class ValoresAmbienteResult
    {
        public int id { get; set; }
        public Dictionary<string,double> variables_ambiente { get; set; }

    }


}
