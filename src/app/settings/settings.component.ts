import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { ActivityIndicator, Application, ApplicationSettings } from '@nativescript/core'
import { Dialogs } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
// import * as Toast from 'nativescript-toasts'



@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  options = {
    title: "Titulo 1",
    message: "msj 1",
    okButtonText: "btn 1"
  }
  options2 = {
    title: "Titulo 2",
    message: "msj 2",
    okButtonText: "btn 2"
  }

  nombreUsuario: string;

  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  doLater(fn) {setTimeout(fn, 500)}

  ngOnInit(): void {
    //  LocalStorage
    if(!ApplicationSettings.hasKey("nombreUsuario")) { 
      ApplicationSettings.setString("nombreUsuario", "Invitado")
    }
    this.nombreUsuario = ApplicationSettings.getString("nombreUsuario")

    this.doLater(() =>
      Dialogs.action("Mensaje", "Cancelar!", ["Opcion1", "Opcion2"])
        .then((result) => {
          console.log("Resultado: " + result);
          if (result === "Opcion1") {
            this.doLater(() => {
              Dialogs.alert(this.options).then(() => console.log("Cerrado 1!"))
            })
          } else if (result === "Opcion2") {
            this.doLater(() => {
              Dialogs.alert(this.options2).then(() => console.log("Cerrado 2!"))
            })
          }
        }))
      /*
      const toastOptions: Toast.ToastOptions = {text: "Hello world", duration: Toast.DURATION.SHORT}
      this.doLater(() => Toast.show(toastOptions))
      */
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  cambio(e) { 
    let indicator = <ActivityIndicator>e.object;
    console.log("indicator.busy: " + indicator.busy);
  }

  editUser() {
    console.log("Editar a " + this.nombreUsuario)
    const url = '/user'
    this.routerExtensions.navigate([url], {
      transition: {
        name: 'fade'
      }
    })
  }
}
