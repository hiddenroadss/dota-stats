import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HEROES_FEATURE_KEY, reducer } from './heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './heroes.effects';
import { HeroesFacade } from './heroes.facade';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(HEROES_FEATURE_KEY, reducer),
        EffectsModule.forFeature([HeroesEffects]),
    ],
    providers: [HeroesFacade],
})
export class StateModule {}
