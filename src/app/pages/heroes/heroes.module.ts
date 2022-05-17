import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { StateModule as HeroesStateModule } from './state/state.module';

@NgModule({
    declarations: [HeroesComponent],
    imports: [CommonModule, HeroesRoutingModule, HeroesStateModule],
})
export class HeroesModule {}
