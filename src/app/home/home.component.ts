import { Component, ElementRef, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, GestureEventData, GridLayout, View } from '@nativescript/core'
import {NewsService} from "../domain/news.service";
import {New} from "../domain/news";
import {RouterExtensions} from "@nativescript/angular";
import { ViewChild } from '@angular/core';
import { Dialogs } from '@nativescript/core';
import * as Toast from 'nativescript-toasts'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // srchReslts: Array<New>  <-- OLD VERSION
  srchReslts: Array<string>;

  @ViewChild("layout") layout: ElementRef;

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

  onSearch(s: string) {
    console.log("Buscando :" + s)
    this.newsService.buscar(s).then((r: any) => {
      console.log("Resultados de busqueda: " + JSON.stringify(r))
      this.srchReslts = r
    }, (e) => {
      console.log("Error en la busqueda " + e)
      // Toast.show({text: "Error en la busqueda", duration: Toast.DURATION.SHORT})  <-- Toast not working
    })

    // Layout Animation
    const layout = <View>this.layout.nativeElement
    layout.animate({
      backgroundColor: new Color("gray"),
      duration: 300,
      delay: 150
    }).then(() => layout.animate({
      backgroundColor: new Color("white"),
      duration: 300,
      delay: 150
    }))
  }

  editNew(nid) {
    console.dir(nid)
    const url = 'news-edit/' + (nid).toString()
    console.log(url)
    this.routerExtensions.navigate([url], {
      transition: {
        name: 'fade'
      }
    })
  }

  onLongPress(e: GestureEventData) {
    console.log("Object that triggered event: " + e.object)
    console.log("View that triggered event: " + e.view)
    console.log("Event name: " + e.eventName)

    const grid = <GridLayout>e.object
    grid.animate({
      backgroundColor: new Color("blue"),
      duration: 300
    }).then(() => grid.animate({
      backgroundColor: new Color("white"),
      duration: 300
    })).then(() => Dialogs.action("Select action", "Cancel", ["Delete", "Archive"]))
  }
}
