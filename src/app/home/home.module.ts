import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { SearchFormComponent } from './serch-form.component'
import {NewsDetailComponent} from "../news-detail/news-detail.component";
import { MinLenDirective } from '../directives/minlen.validator'

@NgModule({
  imports: [
    NativeScriptCommonModule, 
    HomeRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [
    HomeComponent,
    NewsDetailComponent,
    SearchFormComponent,
    MinLenDirective
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
