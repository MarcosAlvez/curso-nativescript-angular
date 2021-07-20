import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { OneRoutingModule } from './one-routing.module'
import { OneComponent } from './one.component'
import {TwoComponent} from "./two.component";

@NgModule({
  imports: [NativeScriptCommonModule, OneRoutingModule],
  declarations: [OneComponent, TwoComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
// @ts-ignore
export class OneModule {}
