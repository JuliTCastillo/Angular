import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
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
