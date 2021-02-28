import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentDetailRoutingModule } from './appointment-detail-routing.module';
import { AppointmentDetailComponent } from './appointment-detail.component';

import { MatTabsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { TableModule } from 'src/app/components/table/table.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentDetailComponent
  ],
  imports: [
    CommonModule,
    AppointmentDetailRoutingModule,
    TableModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppointmentDetailComponent
  ]
})
export class AppointmentDetailModule { }
