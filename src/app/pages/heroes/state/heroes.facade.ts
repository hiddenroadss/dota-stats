import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs';

import * as HeroesActions from './heroes.actions';
import * as HeroesSelectors from './heroes.selectors';

@Injectable()
export class HeroesFacade {
    loaded$ = this.store.select(HeroesSelectors.selectLoaded);

    heroes$ = this.store.select(HeroesSelectors.selectHeroes);

    heroesEntities$ = this.store.select(HeroesSelectors.selectHeroesEntities);

    loadSuccess$ = this.actions$.pipe(
        ofType(HeroesActions.loadSuccess),
        map(({ heroes }) => heroes)
    );

    loadFailure$ = this.actions$.pipe(
        ofType(HeroesActions.loadFailure),
        map(({ error }) => error)
    );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store
    ) {}

    load(): void {
        this.store.dispatch(HeroesActions.load());
    }
}
