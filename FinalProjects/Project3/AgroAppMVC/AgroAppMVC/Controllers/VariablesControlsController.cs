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
    public class VariablesControlsController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: VariablesControls
        public ActionResult Index()
        {
            var variablesControl = db.VariablesControl.Include(v => v.Planta).Include(v => v.TipoVariableAmbiente);
            return View(variablesControl.ToList());
        }

        // GET: VariablesControls/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariablesControl variablesControl = db.VariablesControl.Find(id);
            if (variablesControl == null)
            {
                return HttpNotFound();
            }
            return View(variablesControl);
        }

        // GET: VariablesControls/Create
        public ActionResult Create()
        {
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta");
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente");
            return View();
        }

        // POST: VariablesControls/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "VariableControlId,PlantaId,TipoVariableAmbienteId,VariableControl")] VariablesControl variablesControl)
        {
            if (ModelState.IsValid)
            {
                db.VariablesControl.Add(variablesControl);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", variablesControl.PlantaId);
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente", variablesControl.TipoVariableAmbienteId);
            return View(variablesControl);
        }

        // GET: VariablesControls/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariablesControl variablesControl = db.VariablesControl.Find(id);
            if (variablesControl == null)
            {
                return HttpNotFound();
            }
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", variablesControl.PlantaId);
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente", variablesControl.TipoVariableAmbienteId);
            return View(variablesControl);
        }

        // POST: VariablesControls/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "VariableControlId,PlantaId,TipoVariableAmbienteId,VariableControl")] VariablesControl variablesControl)
        {
            if (ModelState.IsValid)
            {
                db.Entry(variablesControl).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", variablesControl.PlantaId);
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente", variablesControl.TipoVariableAmbienteId);
            return View(variablesControl);
        }

        // GET: VariablesControls/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariablesControl variablesControl = db.VariablesControl.Find(id);
            if (variablesControl == null)
            {
                return HttpNotFound();
            }
            return View(variablesControl);
        }

        // POST: VariablesControls/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            VariablesControl variablesControl = db.VariablesControl.Find(id);
            db.VariablesControl.Remove(variablesControl);
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
