import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';


const routes: Routes = [
  { 
    path: '', 
    component: SidebarComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/pages/pacients/pacients.module#PacientsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
