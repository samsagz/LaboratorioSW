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
    public class PlantasController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: Plantas
        public ActionResult Index()
        {
            return View(db.Planta.ToList());
        }

        // GET: Plantas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Planta planta = db.Planta.Find(id);
            if (planta == null)
            {
                return HttpNotFound();
            }
            return View(planta);
        }

        // GET: Plantas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Plantas/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "PlantaId,NombrePlanta,SemanasCosecha")] Planta planta)
        {
            if (ModelState.IsValid)
            {
                db.Planta.Add(planta);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(planta);
        }

        // GET: Plantas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Planta planta = db.Planta.Find(id);
            if (planta == null)
            {
                return HttpNotFound();
            }
            return View(planta);
        }

        // POST: Plantas/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PlantaId,NombrePlanta,SemanasCosecha")] Planta planta)
        {
            if (ModelState.IsValid)
            {
                db.Entry(planta).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(planta);
        }

        // GET: Plantas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Planta planta = db.Planta.Find(id);
            if (planta == null)
            {
                return HttpNotFound();
            }
            return View(planta);
        }

        // POST: Plantas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Planta planta = db.Planta.Find(id);
            db.Planta.Remove(planta);
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
