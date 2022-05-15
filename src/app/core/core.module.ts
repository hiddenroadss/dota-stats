import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ENVIRONMENT } from './services/environment.service';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [LayoutModule, HttpClientModule],
    providers: [
        {
            provide: ENVIRONMENT,
            useValue: environment,
        },
    ],
})
export class CoreModule {}
