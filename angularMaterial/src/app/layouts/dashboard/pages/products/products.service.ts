import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models';
import { environment } from '../../../../../environments/environment';

//Decorador inyectable
@Injectable({ //Configuración
  providedIn: 'root' //
})

//El servicio es nuestra capa de datos
export class ProductsService {

  constructor(private httpClient : HttpClient){}

  getProducts() : Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseAPIURL}/product`)
    /*return[
      {
        id: "1",
        name: "PC Gamer",
        image: "",
        description: "",
        price : 30000
      }
    ]*/
  }

  getProductsById(id : string) : Observable<IProduct | undefined>{
    return this.httpClient.get<IProduct>(`${environment.baseAPIURL}/product/${id}`)
  }
}
