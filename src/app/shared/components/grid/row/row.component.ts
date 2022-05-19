import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
    ElementRef,
    Renderer2,
} from '@angular/core';
import { GridBreakpointName } from '../common/grid-breakpoints.util';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent implements OnInit {
    @Input() mode: string | GridBreakpointName = GridBreakpointName.Xs;

    constructor(
        private readonly elementRef: ElementRef,
        private readonly renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.renderer.addClass(
            this.elementRef.nativeElement,
            `row-${this.mode}`
        );
    }
}
