import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
    HEROES_FEATURE_KEY,
    heroesAdapter,
    HeroesState,
} from './heroes.reducer';

export const selectHeroesState =
    createFeatureSelector<HeroesState>(HEROES_FEATURE_KEY);

const { selectAll, selectEntities } = heroesAdapter.getSelectors();

export const selectHeroes = createSelector(selectHeroesState, (state) =>
    selectAll(state)
);

export const selectHeroesEntities = createSelector(selectHeroesState, (state) =>
    selectEntities(state)
);

export const selectLoaded = createSelector(
    selectHeroesState,
    (state) => state.loaded
);

export const selectSelectedId = createSelector(
    selectHeroesState,
    (state) => state.selectedId
);

export const selectSelectedProduct = createSelector(
    selectHeroesEntities,
    selectSelectedId,
    (entities, selectedId) => (selectedId ? entities[selectedId] : null)
);

export const selectProduct = (id: number) =>
    createSelector(selectEntities, (entities) => entities[id] ?? null);
