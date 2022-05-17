import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Hero } from '../common/hero.interface';

import * as HeroesActions from './heroes.actions';

export const HEROES_FEATURE_KEY = 'heroes';

export interface HeroesState extends EntityState<Hero> {
    selectedId: number | null;
    loaded: boolean;
}

export interface HeroesPartialState {
    readonly [HEROES_FEATURE_KEY]: HeroesState;
}

export const heroesAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const productInitialState: HeroesState = heroesAdapter.getInitialState({
    selectedId: null,
    loaded: false,
});

const heroesReducer = createReducer(
    productInitialState,
    on(
        HeroesActions.restore,
        (state, { heroes }): HeroesState =>
            heroesAdapter.upsertMany(heroes, {
                ...state,
                loaded: true,
            })
    ),
    on(
        HeroesActions.loadSuccess,
        (state, { heroes }): HeroesState =>
            heroesAdapter.setAll(heroes, {
                ...state,
                loaded: true,
            })
    ),
    on(
        HeroesActions.loadFailure,
        (state): HeroesState => ({
            ...state,
            loaded: true,
        })
    )
);

export function reducer(
    state: HeroesState | undefined,
    action: Action
): HeroesState {
    return heroesReducer(state, action);
}
