import { Component, OnInit } from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {Application} from "@nativescript/core";


@Component({
  selector: 'Two',
  templateUrl: './two.component.html',
})
// @ts-ignore
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
