import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import { HoverClassModule } from '@shared/directives/hover-class/hover-class.module';

@NgModule({
    declarations: [PreviewComponent],
    imports: [CommonModule, RouterModule, HoverClassModule],
    exports: [PreviewComponent],
})
export class PreviewModule {}
