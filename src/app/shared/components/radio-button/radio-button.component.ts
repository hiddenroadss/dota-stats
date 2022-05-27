import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    forwardRef,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioButtonComponent),
            multi: true,
        },
    ],
})
export class RadioButtonComponent implements ControlValueAccessor {
    private _options!: any[];
    public value!: any;

    public onChange: any = () => {};
    public onTouch: any = () => {};

    get options() {
        return this._options;
    }
    @Input() set options(value) {
        this._options = value;
    }

    @Input() label!: string;

    constructor() {}
    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    onClick(option: string) {
        this.value = option;
        this.onChange(option);
    }
}
