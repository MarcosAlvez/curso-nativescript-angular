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
}
