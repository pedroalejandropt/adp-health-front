import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/pages/sign-in/sign-in.module#SignInModule'
      },
      {
        path: 'sign-up',
        loadChildren: 'src/app/pages/sign-up/sign-up.module#SignUpModule'
      },
      {
        path: 'dash',
        loadChildren: 'src/app/components/sidebar/sidebar.module#SidebarModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
