import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientsRoutingModule } from './pacients-routing.module';
import { PacientsComponent } from './pacients.component';

import { TableModule } from 'src/app/components/table/table.module';
import { AppointmentFormModule } from './appointment-form/appointment-form.module';

import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    PacientsComponent
  ],
  imports: [
    CommonModule,
    PacientsRoutingModule,
    TableModule,
    MatProgressSpinnerModule,
    AppointmentFormModule
  ]
})
export class PacientsModule { }
