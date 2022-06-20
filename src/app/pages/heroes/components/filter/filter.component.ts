import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            attribute: [],
            complexity: [],
            search: [],
        });
    }

    test(value: any) {
        console.log(value, 'ddd');
    }
}
