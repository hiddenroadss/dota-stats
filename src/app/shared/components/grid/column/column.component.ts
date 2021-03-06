import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ElementRef,
    Renderer2,
    Input,
} from '@angular/core';
import { GridBreakpointName } from '../common/grid-breakpoints.util';

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent implements OnInit {
    @Input() modes: Partial<Record<GridBreakpointName, number>> = {
        [GridBreakpointName.Xs]: 0,
    };

    constructor(
        private readonly elementRef: ElementRef,
        private readonly renderer: Renderer2
    ) {}

    ngOnInit(): void {
        for (const [key, value] of Object.entries(this.modes)) {
            let className = `column-${key}`;
            if (value && value > 0) {
                className += `-${value}`;
            }
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }
}
