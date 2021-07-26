import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { NewsEditComponent } from './news-edit.component'

const routes: Routes = [{ path: '', component: NewsEditComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class NewsEditRoutingModule {}
