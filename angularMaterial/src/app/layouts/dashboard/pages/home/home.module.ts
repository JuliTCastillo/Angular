import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TitleComponent } from './components/title/title.component';
import { TitleModule } from './components/title/title.module';


@NgModule({
  declarations: [
    HomeComponent,
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
