using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using AgroAppMVC.Models;

namespace AgroAppMVC.Controllers
{
    public class TipoVariableCuidadoesController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: TipoVariableCuidadoes
        public ActionResult Index()
        {
            return View(db.TipoVariableCuidado.ToList());
        }

        // GET: TipoVariableCuidadoes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoVariableCuidado tipoVariableCuidado = db.TipoVariableCuidado.Find(id);
            if (tipoVariableCuidado == null)
            {
                return HttpNotFound();
            }
            return View(tipoVariableCuidado);
        }

        // GET: TipoVariableCuidadoes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TipoVariableCuidadoes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "TipoVariableCuidadoId,NombreTipoVariableCuidado")] TipoVariableCuidado tipoVariableCuidado)
        {
            if (ModelState.IsValid)
            {
                db.TipoVariableCuidado.Add(tipoVariableCuidado);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tipoVariableCuidado);
        }

        // GET: TipoVariableCuidadoes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoVariableCuidado tipoVariableCuidado = db.TipoVariableCuidado.Find(id);
            if (tipoVariableCuidado == null)
            {
                return HttpNotFound();
            }
            return View(tipoVariableCuidado);
        }

        // POST: TipoVariableCuidadoes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "TipoVariableCuidadoId,NombreTipoVariableCuidado")] TipoVariableCuidado tipoVariableCuidado)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tipoVariableCuidado).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tipoVariableCuidado);
        }

        // GET: TipoVariableCuidadoes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoVariableCuidado tipoVariableCuidado = db.TipoVariableCuidado.Find(id);
            if (tipoVariableCuidado == null)
            {
                return HttpNotFound();
            }
            return View(tipoVariableCuidado);
        }

        // POST: TipoVariableCuidadoes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TipoVariableCuidado tipoVariableCuidado = db.TipoVariableCuidado.Find(id);
            db.TipoVariableCuidado.Remove(tipoVariableCuidado);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
