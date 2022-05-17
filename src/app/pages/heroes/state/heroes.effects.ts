import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { HeroesApiService } from '@core/services/heroes-api.service';
import {
    Actions,
    concatLatestFrom,
    createEffect,
    ofType,
    OnInitEffects,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';

import * as HeroesActions from './heroes.actions';

@Injectable()
export class HeroesEffects implements OnInitEffects {
    init$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HeroesActions.init),
            switchMap(() => {
                return this.heroesApiService
                    .loadHeroes()
                    .pipe(
                        map((heroes) => HeroesActions.loadSuccess({ heroes }))
                    );
            })
        );
    });

    load$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HeroesActions.load),
            switchMap(() => {
                return this.heroesApiService
                    .loadHeroes()
                    .pipe(
                        map((heroes) => HeroesActions.loadSuccess({ heroes }))
                    );
            })
        );
    });

    constructor(
        private readonly actions$: Actions,
        private readonly heroesApiService: HeroesApiService
    ) {}

    ngrxOnInitEffects(): Action {
        return HeroesActions.init();
    }
}
