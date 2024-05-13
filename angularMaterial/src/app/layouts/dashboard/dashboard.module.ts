import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersModule } from './pages/users/users.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from './pages/products/products.module';
import { Clase09Module } from './pages/clase09/clase09.module';
import { Clase10Module } from './pages/clase10/clase10.module';
import { LoginDialogComponent } from './pages/home/components/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersModule,
    PipesYDirectivasModule,
    SharedModule,
    ProductsModule,
    Clase09Module, 
    Clase10Module,
  ],
  exports:[DashboardComponent]
})
export class DashboardModule {
  
}
