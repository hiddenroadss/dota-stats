import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
    exports: [LayoutComponent],
})
export class LayoutModule {}
