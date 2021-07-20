import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import {OneComponent} from "./one.component";
import {TwoComponent} from "./two.component";

const routes: Routes = [{ path: '', redirectTo: 'one' },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
// @ts-ignore
export class OneRoutingModule {}
