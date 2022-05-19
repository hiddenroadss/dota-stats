import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';

const components = [RowComponent, ColumnComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule],
    exports: [...components],
})
export class GridModule {}
