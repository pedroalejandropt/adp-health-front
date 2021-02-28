import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';


import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatIconModule,
    MatListModule,
    MatMenuModule
  ]
})
export class SidebarModule { }
