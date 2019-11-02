using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AgroAppMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Modulos()
        {

            return Json(new 
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
            }, JsonRequestBehavior.AllowGet);
        }
    }
}