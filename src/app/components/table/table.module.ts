import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
