import { Component, OnInit } from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {Application} from "@nativescript/core";
import {RouterExtensions} from "@nativescript/angular";
import {filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'One',
  templateUrl: './one.component.html',
})
// @ts-ignore
export class OneComponent implements OnInit {
  private _activatedUrl: string

  constructor(private router: Router, private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
    this._activatedUrl = '/one'

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })
  }
}
