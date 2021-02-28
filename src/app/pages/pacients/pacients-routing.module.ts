import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientsComponent } from './pacients.component';


const routes: Routes = [
  {
    path: '',
    component: PacientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientsRoutingModule { }
