import { Component, Input, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../domain/news.service";
import { Application } from '@nativescript/core'
import { New } from '../domain/news';

@Component({
  selector: 'NewsEdit',
  templateUrl: './news-edit.component.html',
})
export class NewsEditComponent implements OnInit {
  newsTitle: string = ""; 
  n: New
  constructor(private route: ActivatedRoute,private newsService: NewsService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.n = this.newsService.getNewById(id)
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onSave(e) {
    console.log(e)
  }
}
