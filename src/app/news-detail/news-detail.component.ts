import { Component, OnInit } from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {Application} from "@nativescript/core";
import {NewsService} from "../domain/news.service";
import {ActivatedRoute} from "@angular/router";
import {New} from "../domain/news";

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent implements OnInit {
  n: New

  constructor(private route: ActivatedRoute,private newsService: NewsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.n = this.newsService.getNewById(id)
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
