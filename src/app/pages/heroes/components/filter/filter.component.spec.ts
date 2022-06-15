import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from '@shared/components/radio-button/radio-button.module';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilterComponent],
            imports: [ReactiveFormsModule, RadioButtonModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
