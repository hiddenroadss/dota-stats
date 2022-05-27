import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { StateModule as HeroesStateModule } from './state/state.module';
import { GridModule } from '@shared/components/grid/grid.module';
import { PreviewModule } from '@shared/components/preview/preview.module';
import { FilterModule } from './components/filter/filter.module';

@NgModule({
    declarations: [HeroesComponent],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        HeroesStateModule,
        GridModule,
        PreviewModule,
        FilterModule,
    ],
})
export class HeroesModule {}
