import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
    constructor() {}
}