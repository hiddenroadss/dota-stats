import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { RadioButtonModule } from '@shared/components/radio-button/radio-button.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [FilterComponent],
    imports: [CommonModule, RadioButtonModule, ReactiveFormsModule],
    exports: [FilterComponent],
})
export class FilterModule {}
