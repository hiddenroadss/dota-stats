import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeroesApiService } from '@core/services/heroes-api.service';
import { isNotNullOrUndefined } from '@core/utils/operators';
import { Observable } from 'rxjs';
import { Hero } from './common/hero.interface';
import { HeroesFacade } from './state/heroes.facade';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
    heroes$!: Observable<Hero[]>;
    constructor(private readonly heroesFacade: HeroesFacade) {}

    ngOnInit() {
        this.heroes$ = this.heroesFacade.heroes$.pipe(isNotNullOrUndefined());
    }

    trackByFunc(index: number, hero: Hero) {
        return hero.id;
    }
}
