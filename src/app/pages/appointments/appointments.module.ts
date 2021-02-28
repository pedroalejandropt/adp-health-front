import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';

import { TableModule } from 'src/app/components/table/table.module';
import { AppointmentFormModule } from '../pacients/appointment-form/appointment-form.module';
import { AppointmentDetailModule } from './appointment-detail/appointment-detail.module';

import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    TableModule,
    MatProgressSpinnerModule,
    AppointmentFormModule,
    AppointmentDetailModule
  ]
})
export class AppointmentsModule { }
