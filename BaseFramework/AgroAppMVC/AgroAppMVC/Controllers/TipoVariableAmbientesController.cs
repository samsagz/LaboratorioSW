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
    public class TipoVariableAmbientesController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: TipoVariableAmbientes
        public ActionResult Index()
        {
            return View(db.TipoVariableAmbiente.ToList());
        }

        // GET: TipoVariableAmbientes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoVariableAmbiente tipoVariableAmbiente = db.TipoVariableAmbiente.Find(id);
            if (tipoVariableAmbiente == null)
            {
                return HttpNotFound();
            }
            return View(tipoVariableAmbiente);
        }

        // GET: TipoVariableAmbientes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TipoVariableAmbientes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "TipoVariableAmbienteId,NombreTipoVariableAmbiente")] TipoVariableAmbiente tipoVariableAmbiente)
        {
            if (ModelState.IsValid)
            {
                db.TipoVariableAmbiente.Add(tipoVariableAmbiente);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tipoVariableAmbiente);
        }

        // GET: TipoVariableAmbientes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoVariableAmbiente tipoVariableAmbiente = db.TipoVariableAmbiente.Find(id);
            if (tipoVariableAmbiente == null)
            {
                return HttpNotFound();
            }
            return View(tipoVariableAmbiente);
        }

        // POST: TipoVariableAmbientes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "TipoVariableAmbienteId,NombreTipoVariableAmbiente")] TipoVariableAmbiente tipoVariableAmbiente)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tipoVariableAmbiente).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tipoVariableAmbiente);
        }

        // GET: TipoVariableAmbientes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoVariableAmbiente tipoVariableAmbiente = db.TipoVariableAmbiente.Find(id);
            if (tipoVariableAmbiente == null)
            {
                return HttpNotFound();
            }
            return View(tipoVariableAmbiente);
        }

        // POST: TipoVariableAmbientes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TipoVariableAmbiente tipoVariableAmbiente = db.TipoVariableAmbiente.Find(id);
            db.TipoVariableAmbiente.Remove(tipoVariableAmbiente);
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
