import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorsRoutingModule } from './administrators-routing.module';
import { AdministratorsComponent } from './administrators.component';

import { TableModule } from 'src/app/components/table/table.module';

import { MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdministratorsComponent
  ],
  imports: [
    CommonModule,
    AdministratorsRoutingModule,
    TableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministratorsModule { }
