import { Component, Input, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Application, ApplicationSettings } from '@nativescript/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

@Component({
    selector: 'User',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    nombreUsuario: string
    nuevoNombre: string

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
        this.nombreUsuario = ApplicationSettings.getString("nombreUsuario")
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
      }

    submit() {
        console.log(this.nuevoNombre)
        ApplicationSettings.remove("nombreUsuario")
        ApplicationSettings.setString("nombreUsuario", this.nuevoNombre)
        const url = '/settings'
        this.routerExtensions.navigate([url], {
            transition: {
                name: 'fade'
          }
        })
    }
}