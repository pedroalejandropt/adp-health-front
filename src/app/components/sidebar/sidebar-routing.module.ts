import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { AuthGuardService as AuthGuard } from 'src/app/auth/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    component: SidebarComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/pages/appointments/appointments.module#AppointmentsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'pacients',
        loadChildren: 'src/app/pages/pacients/pacients.module#PacientsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'administrators',
        loadChildren: 'src/app/pages/administrators/administrators.module#AdministratorsModule',
        canActivate: [AuthGuard]
      },
      { 
        path: '**', redirectTo: '' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
