import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TitleComponent } from './components/title/title.component';
import { TitleModule } from './components/title/title.module';
import { PortadaComponent } from './components/portada/portada.component';


@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
