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
    public class VariableCuidadoesController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: VariableCuidadoes
        public ActionResult Index()
        {
            var variableCuidado = db.VariableCuidado.Include(v => v.Planta).Include(v => v.TipoVariableCuidado);
            return View(variableCuidado.ToList());
        }

        // GET: VariableCuidadoes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariableCuidado variableCuidado = db.VariableCuidado.Find(id);
            if (variableCuidado == null)
            {
                return HttpNotFound();
            }
            return View(variableCuidado);
        }

        // GET: VariableCuidadoes/Create
        public ActionResult Create()
        {
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta");
            ViewBag.TipoVariableCuidadoId = new SelectList(db.TipoVariableCuidado, "TipoVariableCuidadoId", "NombreTipoVariableCuidado");
            return View();
        }

        // POST: VariableCuidadoes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "VariablesCuidadoId,TipoVariableCuidadoId,ValorCuidado,PlantaId")] VariableCuidado variableCuidado)
        {
            if (ModelState.IsValid)
            {
                db.VariableCuidado.Add(variableCuidado);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", variableCuidado.PlantaId);
            ViewBag.TipoVariableCuidadoId = new SelectList(db.TipoVariableCuidado, "TipoVariableCuidadoId", "NombreTipoVariableCuidado", variableCuidado.TipoVariableCuidadoId);
            return View(variableCuidado);
        }

        // GET: VariableCuidadoes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariableCuidado variableCuidado = db.VariableCuidado.Find(id);
            if (variableCuidado == null)
            {
                return HttpNotFound();
            }
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", variableCuidado.PlantaId);
            ViewBag.TipoVariableCuidadoId = new SelectList(db.TipoVariableCuidado, "TipoVariableCuidadoId", "NombreTipoVariableCuidado", variableCuidado.TipoVariableCuidadoId);
            return View(variableCuidado);
        }

        // POST: VariableCuidadoes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "VariablesCuidadoId,TipoVariableCuidadoId,ValorCuidado,PlantaId")] VariableCuidado variableCuidado)
        {
            if (ModelState.IsValid)
            {
                db.Entry(variableCuidado).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", variableCuidado.PlantaId);
            ViewBag.TipoVariableCuidadoId = new SelectList(db.TipoVariableCuidado, "TipoVariableCuidadoId", "NombreTipoVariableCuidado", variableCuidado.TipoVariableCuidadoId);
            return View(variableCuidado);
        }

        // GET: VariableCuidadoes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariableCuidado variableCuidado = db.VariableCuidado.Find(id);
            if (variableCuidado == null)
            {
                return HttpNotFound();
            }
            return View(variableCuidado);
        }

        // POST: VariableCuidadoes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            VariableCuidado variableCuidado = db.VariableCuidado.Find(id);
            db.VariableCuidado.Remove(variableCuidado);
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
