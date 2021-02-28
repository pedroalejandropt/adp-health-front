import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentDetailComponent } from './appointment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentDetailRoutingModule { }
