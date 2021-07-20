import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, isIOS } from '@nativescript/core'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  noblocked: string = '';
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    if (android) {
      this.noblocked = 'Es android'
    }
    if (isIOS) {
      this.noblocked = 'Es IOS'
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
