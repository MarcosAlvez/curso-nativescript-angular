import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import {NewsService} from "../domain/news.service";
import {New} from "../domain/news";
import {RouterExtensions} from "@nativescript/angular";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(public newsService: NewsService, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(e): void {
    console.dir(e.index + 1)
    const url = 'home/news-detail/' + (e.index + 1).toString()
    this.routerExtensions.navigate([url], {
      transition: {
        name: 'fade'
      }
    })
  }

  onPull(ev) {
    console.dir(ev)
    var pullRefresh = ev.object
    setTimeout(function () {
       pullRefresh.refreshing = false
    }, 2000)
  }

}
