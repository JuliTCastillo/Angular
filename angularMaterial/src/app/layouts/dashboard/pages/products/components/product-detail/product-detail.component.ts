import { Component } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { IProduct } from '../../models';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product$ : Observable<IProduct | undefined>;
  loading = false;

  constructor(
    private activatedRoute : ActivatedRoute,
    private productService : ProductsService,
    private router : Router
  ){
    this.product$ = this.productService
    .getProductsById(this.activatedRoute.snapshot.params['id'])
    .pipe(
      finalize(()=>{
        this.loading = false
      })
    )
  }

  cambiarParametro() : void{
    this.router.navigate(['dashboard', 'product', Math.random().toFixed(2)])
  }
}
