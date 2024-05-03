import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  exports: [ProductsComponent],
  providers: [
    // ProductsService
    { //Estamos diciendo que cuando Angular provee el servicio, utilice la clase ProductsService
      provide: ProductsService,
      useClass: ProductsService, //Se usa cuando tenemos otras clases, por ejemplo con los mocks 
    }
  ]
})
export class ProductsModule { }
