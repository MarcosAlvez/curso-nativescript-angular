import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { NewsEditRoutingModule } from './news-edit-routing.module'
import { NewsEditComponent } from './news-edit.component'

@NgModule({
  imports: [NativeScriptCommonModule, NewsEditRoutingModule],
  declarations: [NewsEditComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewsEditModule {}
