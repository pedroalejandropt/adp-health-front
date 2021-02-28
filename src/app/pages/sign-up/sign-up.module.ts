import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';

import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
