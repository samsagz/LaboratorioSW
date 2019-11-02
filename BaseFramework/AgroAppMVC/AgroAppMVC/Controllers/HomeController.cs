using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AgroAppDomain.Model.Response;

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

        public ActionResult Dashboard(int? id)
        {
            ViewBag.ModuloId = id == null ? 1 : id;
            return View();
        }

        [HttpGet]
        public JsonResult Modulos(int? id)
        {
            var result = new List<ModuloResult>();

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
                variables_control = new Dictionary<string, int>
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

            return Json(modulo, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ValoresAmbiente(int? id)
        {
            var result = new
            {
                id = 1,
                variable_ambiente = new Dictionary<string, string>
                {
                    {"Luz","21.3" },
                    {"Temperatura","30.1" },
                    {"Humedad","2.3" },
                }
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}