import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { EffectsModule } from '@ngrx/effects'
import { 
  initializeNoticiasState,
  NewsEffects,
  NewsState,
  reducersNews} from './domain/news-state.model'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {NewsService} from "~/app/domain/news.service";
import { ActionReducerMap, StoreModule as NgRxStoreModule } from '@ngrx/store'

// REDUX INIT
export interface AppState {
  news: NewsState
}

const reducers: ActionReducerMap<AppState> = {
  news: reducersNews
}

const reducersInitializeState = {
  news: initializeNoticiasState()
}
// END REDUX

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, 
            NativeScriptModule, 
            NativeScriptUISideDrawerModule,
            NgRxStoreModule.forRoot(reducers, {initialState: reducersInitializeState}),
            EffectsModule.forRoot([NewsEffects])
  ],
  declarations: [AppComponent],
  providers: [NewsService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
