import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './user.component'

@NgModule({
  imports: [NativeScriptCommonModule, 
            UserRoutingModule,
            NativeScriptFormsModule
  ],
  declarations: [UserComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UserModule {}