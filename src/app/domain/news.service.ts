import { Injectable } from '@angular/core';
import { getJSON, request } from '@nativescript/core/http';
import {New, NEWS} from "./news";


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api: string = "https://28dc124002af.ngrok.io";

  constructor() { }

  getNews(): New[] {
    return NEWS
  }

  getNewById(id: string): New {
    const n = this.getNews().filter(function (c) {return c.id.toString() === id}) [0]
    console.dir(n)
    return n
  }

  buscar(s: string) {
    return getJSON(this.api + "/get?q=" + s)
  }

  favs() {
    return getJSON(this.api + "/favs")
  }

  agregar(s: string) {
    return request({
      url: this.api +"/favs",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ nuevo: s  })
    })
  }
}
