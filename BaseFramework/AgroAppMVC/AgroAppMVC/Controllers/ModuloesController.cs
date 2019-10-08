﻿using System;
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
    public class ModuloesController : Controller
    {
        private AgroAppEntities db = new AgroAppEntities();

        // GET: Moduloes
        public ActionResult Index()
        {
            var modulo = db.Modulo.Include(m => m.Planta);
            return View(modulo.ToList());
        }

        // GET: Moduloes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Modulo modulo = db.Modulo.Find(id);
            if (modulo == null)
            {
                return HttpNotFound();
            }
            return View(modulo);
        }

        // GET: Moduloes/Create
        public ActionResult Create()
        {
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta");
            return View();
        }

        // POST: Moduloes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ModuloId,PlantaId,NumeroPlantas,FechaSiembra,VariablesAmbienteId,FechaEstimadaCosecha,FechaRealCosecha,SolucionNutricional")] Modulo modulo)
        {
            if (ModelState.IsValid)
            {
                db.Modulo.Add(modulo);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", modulo.PlantaId);
            return View(modulo);
        }

        // GET: Moduloes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Modulo modulo = db.Modulo.Find(id);
            if (modulo == null)
            {
                return HttpNotFound();
            }
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", modulo.PlantaId);
            return View(modulo);
        }

        // POST: Moduloes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ModuloId,PlantaId,NumeroPlantas,FechaSiembra,VariablesAmbienteId,FechaEstimadaCosecha,FechaRealCosecha,SolucionNutricional")] Modulo modulo)
        {
            if (ModelState.IsValid)
            {
                db.Entry(modulo).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.PlantaId = new SelectList(db.Planta, "PlantaId", "NombrePlanta", modulo.PlantaId);
            return View(modulo);
        }

        // GET: Moduloes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Modulo modulo = db.Modulo.Find(id);
            if (modulo == null)
            {
                return HttpNotFound();
            }
            return View(modulo);
        }

        // POST: Moduloes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Modulo modulo = db.Modulo.Find(id);
            db.Modulo.Remove(modulo);
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
