import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[hoverClass]',
})
export class HoverClassDirective {
    @Input() hoverClass: any;

    @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.classList.add(this.hoverClass);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.elementRef.nativeElement.classList.remove(this.hoverClass);
    }
    constructor(private elementRef: ElementRef) {}
}
