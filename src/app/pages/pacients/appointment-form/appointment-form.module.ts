import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentFormRoutingModule } from './appointment-form-routing.module';
import { AppointmentFormComponent } from './appointment-form.component';

import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    AppointmentFormRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppointmentFormComponent
  ]
})
export class AppointmentFormModule { }
