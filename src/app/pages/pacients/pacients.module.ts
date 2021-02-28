import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientsRoutingModule } from './pacients-routing.module';
import { PacientsComponent } from './pacients.component';
import { TableModule } from 'src/app/components/table/table.module';


@NgModule({
  declarations: [
    PacientsComponent
  ],
  imports: [
    CommonModule,
    PacientsRoutingModule,
    TableModule
  ]
})
export class PacientsModule { }
