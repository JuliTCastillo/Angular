import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { MyCustomTextTransformPipe } from './my-custom-text-transform.pipe';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    MyCustomTextTransformPipe, 
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule,
  ],
  exports:[PipesYDirectivasComponent]
})
export class PipesYDirectivasModule { }
