import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { Noticia } from './news'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

// STATES
export interface NewsState {
    items: Noticia[]
    promoted: Noticia
}

export function initializeNoticiasState() {
    return {
        items: [],
        promoted: null
    }
}

// ACTIONS

export enum NewsActionsTypes {
    INIT_MY_DATA = "[News] Init My Data",
    NEW_NEWS = "[News] Nueva",
    PROMOTE_NEWS = "[News] Promocionar"
}

export class InitMyDataAction implements Action {
    type = NewsActionsTypes.INIT_MY_DATA
    constructor(public titulares: Noticia[]) {}
}

export class NewNewsAction implements Action {
    type = NewsActionsTypes.NEW_NEWS
    constructor(public noticia: Noticia) {}
}

export class PromoteNewsAction implements Action {
    type = NewsActionsTypes.PROMOTE_NEWS
    constructor(public noticia: Noticia) {}
}

export type NewsActions = InitMyDataAction | NewNewsAction | PromoteNewsAction

// REDUCERS
export function reducersNews(state: NewsState,
                            action: NewsActions): NewsState {
    switch (action.type) {
        case NewsActionsTypes.INIT_MY_DATA: {
            const titulares: Noticia[] = (action as InitMyDataAction).titulares
            return {
                ...state,
                items: titulares.map((n) => new Noticia(n.title))
            }
        }
        case NewsActionsTypes.NEW_NEWS: {
            return {
                ...state,
                items: [...state.items, (action as NewNewsAction).noticia]
            }
        }
        case NewsActionsTypes.PROMOTE_NEWS: {
            return { 
                ...state,
                promoted: (action as PromoteNewsAction).noticia
            }
        }
    }
    return state
}

// EFFECTS
@Injectable()
export class NewsEffects {
    @Effect()
    newAdded$: Observable<Action> = this.action$.pipe(
        ofType(NewsActionsTypes.NEW_NEWS),
        map((action: NewNewsAction) => new PromoteNewsAction(action.noticia))
    )

    constructor(private action$: Actions) {}
}