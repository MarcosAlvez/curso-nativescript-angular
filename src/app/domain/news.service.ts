import { Injectable } from '@angular/core';
import { getJSON, request } from '@nativescript/core/http';
import {New, NEWS} from "./news";
const sqlite = require("nativescript-sqlite")


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api: string = "https://ed23f40ea080.ngrok.io";
  sql1 = "CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT);"
  sql2 = "CREATE TABLE IF NOT EXISTS favs (fav_id INTEGER PRIMARY KEY AUTOINCREMENT, n_title TEXT NOT NULL UNIQUE);"

  constructor() {
    this.getDb((db) => {
      console.dir(db)
      db.each("SELECT * FROM logs",
        (err, fila) => console.log("Fila: ", fila),
        (err, totales) => console.log("Totales: ", totales))
    }, () => console.log("Error on getDB"))
  }

  // Iniciar db
  getDb(fnOk, fnError) {
    return new sqlite("mi_db_logs", (err, db) => {
      if(err) {
        console.error("Error al abrir db! ", err)
      } else {
        console.log("Está la db abierta: ", db.isOpen() ? "Si" : "No")
        db.execSQL(this.sql1)
          .then((id) => {
            console.log("CREATE TABLE OK")
            fnOk(db)
          }, (error) => {
            console.log("CREATE TABLE ERROR", error)
            fnError(error)
          })
        db.execSQL(this.sql2)
          .then((id) => {
            console.log("CREATE TABLE OK")
            fnOk(db)
          }, (error) =>{
            console.log("CREATE TABLE ERROR", error)
            fnError(error)
          })
      }
    })
  }

  getNews(): New[] {
    return NEWS
  }

  getNewById(id: string): New {
    const n = this.getNews().filter(function (c) {return c.id.toString() === id}) [0]
    console.dir(n)
    return n
  }

  buscar(s: string) {
    this.getDb((db) => {
      db.execSQL("INSERT INTO logs (texto) VALUES (?)", [s]),
        (err, id) => console.log("Nuevo id: ", id)
    }, () => console.log("Error on getDb"))

    return getJSON(this.api + "/get?q=" + s)
  }

  agregar(s: string) {
    return request({
      url: this.api +"/favs",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ nuevo: s  })
    })
  }

  addFav(x: string) {
    this.getDb((db) => {
      db.execSQL("INSERT INTO favs (n_title) VALUES (?)", [x]),
        (err, id) => console.log("Nuevo id: ", id)
    }, () => console.log("Error on getDb"))
  }

  favs() {
    this.getDb((db) => {
      db.each("SELECT * FROM favs",
        (err, ids) => console.log("fila: ", ids),
        (err, totales) => console.log("totales: ", totales))
    }, () => console.log("Error on getDB"))
  }

  dropTables() {
    this.getDb((db) => {
      db.execSQL("DROP TABLE favs")
        .then(() => console.log("favs Table deleted"))
    }, () => console.log("Error on drop tables"))
    this.getDb((db) => {
      db.execSQL("DROP TABLE logs")
        .then(() => console.log("favs Table deleted"))
    }, () => console.log("Error on drop tables"))
  }
}

// TODO: 

// Implementa un caso de uso de favoritos en la solapa de búsquedas y 
// añade en el list view un icono para agregar a favoritos.

// Llama a un service que use sqlite al hacer tap en el icono y guarda el nombre
// de ese ítem en una tabla de favoritos.

// Consulta al service que accede a base de datos sqlite, 
// en la sección favoritos e incluye los favoritos en un listado.