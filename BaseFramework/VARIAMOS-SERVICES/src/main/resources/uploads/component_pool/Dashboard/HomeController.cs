using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AgroAppDomain;
using AgroAppDomain.Model.Response;

namespace AgroAppMVC.Controllers
{
    public class HomeController : Controller
    {
        private Dashboard dashboard = new Dashboard();

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
            ViewBag.ModuloId = id == null ? dashboard.ModuloDefault() : id;
            return View();
        }

        [HttpGet]
        public JsonResult Modulos(int id)
        {
            //frijol
            var modulo = dashboard.DatosBasicos(id);

            return Json(modulo, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ValoresAmbiente(int id)
        {
            var result = dashboard.ValoresAmbiente(id);

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GraficarAmbiente(int id, string value)
        {
            var result = dashboard.GraficarAmbiente(id, value);

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}