import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { LayoutService } from '@core/services/layout.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    readonly breakpoints = Breakpoints;

    layoutType$: Observable<string>;

    constructor(private readonly layoutService: LayoutService) {
        this.layoutType$ = this.layoutService.layoutType$;
    }
}
