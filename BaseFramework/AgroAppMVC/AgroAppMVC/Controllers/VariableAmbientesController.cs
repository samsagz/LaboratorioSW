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
    public class VariableAmbientesController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: VariableAmbientes
        public ActionResult Index()
        {
            var variableAmbiente = db.VariableAmbiente.Include(v => v.Modulo).Include(v => v.TipoVariableAmbiente);
            return View(variableAmbiente.ToList());
        }

        // GET: VariableAmbientes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariableAmbiente variableAmbiente = db.VariableAmbiente.Find(id);
            if (variableAmbiente == null)
            {
                return HttpNotFound();
            }
            return View(variableAmbiente);
        }

        // GET: VariableAmbientes/Create
        public ActionResult Create()
        {
            ViewBag.ModuloId = new SelectList(db.Modulo, "ModuloId", "ModuloId");
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente");
            return View();
        }

        // POST: VariableAmbientes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "VariableAmbienteId,ModuloId,TipoVariableAmbienteId,Valor,TimeTag")] VariableAmbiente variableAmbiente)
        {
            if (ModelState.IsValid)
            {
                db.VariableAmbiente.Add(variableAmbiente);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ModuloId = new SelectList(db.Modulo, "ModuloId", "ModuloId", variableAmbiente.ModuloId);
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente", variableAmbiente.TipoVariableAmbienteId);
            return View(variableAmbiente);
        }

        // GET: VariableAmbientes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariableAmbiente variableAmbiente = db.VariableAmbiente.Find(id);
            if (variableAmbiente == null)
            {
                return HttpNotFound();
            }
            ViewBag.ModuloId = new SelectList(db.Modulo, "ModuloId", "ModuloId", variableAmbiente.ModuloId);
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente", variableAmbiente.TipoVariableAmbienteId);
            return View(variableAmbiente);
        }

        // POST: VariableAmbientes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "VariableAmbienteId,ModuloId,TipoVariableAmbienteId,Valor,TimeTag")] VariableAmbiente variableAmbiente)
        {
            if (ModelState.IsValid)
            {
                db.Entry(variableAmbiente).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ModuloId = new SelectList(db.Modulo, "ModuloId", "ModuloId", variableAmbiente.ModuloId);
            ViewBag.TipoVariableAmbienteId = new SelectList(db.TipoVariableAmbiente, "TipoVariableAmbienteId", "NombreTipoVariableAmbiente", variableAmbiente.TipoVariableAmbienteId);
            return View(variableAmbiente);
        }

        // GET: VariableAmbientes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            VariableAmbiente variableAmbiente = db.VariableAmbiente.Find(id);
            if (variableAmbiente == null)
            {
                return HttpNotFound();
            }
            return View(variableAmbiente);
        }

        // POST: VariableAmbientes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            VariableAmbiente variableAmbiente = db.VariableAmbiente.Find(id);
            db.VariableAmbiente.Remove(variableAmbiente);
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
