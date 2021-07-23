import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home.component'
import {NewsDetailComponent} from "../news-detail/news-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news-detail/:id', component: NewsDetailComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
