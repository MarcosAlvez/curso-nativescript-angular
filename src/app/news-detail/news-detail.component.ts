import { Component, OnInit } from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {Application} from "@nativescript/core";
import {NewsService} from "../domain/news.service";
import {ActivatedRoute} from "@angular/router";
import {New} from "../domain/news";
import { Dialogs } from '@nativescript/core';
// import * as Toast  from 'nativescript-toasts';  TOAST NOT WORKING PROPERLY

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

  onPull(e) {
    var pullRefresh = e.object
    setTimeout(function () {
       pullRefresh.refreshing = false
    }, 2000)
  }

  voteUp(e) {
    console.dir(e)
    const dOpt = {
      title: "Vote up",
      message: "You voted up this message: \n" + e.text,
      okButtonText: "Accept"
    }
    Dialogs.alert(dOpt)
  }

  voteDown(e) {
    console.dir(e)
    const dOpt = {
      title: "Vote down",
      message: "You voted down this message: \n" + e.text ,
      okButtonText: "Accept"
    }
    Dialogs.alert(dOpt)
  }

  report(e) {
    Dialogs.action("Report", "Cancel", ["Spam", "Offensive"])
      .then((r) => {
        if( r === "Spam") {
          console.log(r)
          //const toastOpt: Toast.ToastOptions = {text: "Reported as Spam", duration: Toast.DURATION.SHORT}
          //Toast.show(toastOpt)
        } else if(r === "Offensive") {
          console.log(r)
          //const toastOpt: Toast.ToastOptions = {text: "Reported as Offensive", duration: Toast.DURATION.SHORT}
          //Toast.show(toastOpt)
        }
      })
  }
}
