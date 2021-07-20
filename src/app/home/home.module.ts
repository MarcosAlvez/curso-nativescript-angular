import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import {NewsService} from "../domain/news.service";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NewsService]
})
export class HomeModule {}
