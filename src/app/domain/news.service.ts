import { Injectable } from '@angular/core';
import {New, NEWS} from "./news";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(): New[] {
    return NEWS
  }

  getNewById(id: string): New {
    const n = this.getNews().filter(function (c) {return c.id.toString() === id}) [0]
    console.dir(n)
    return n
  }
}
