import { Injectable } from '@angular/core';

//Decorador inyectable
// @Injectable({ //Configuración
//   providedIn: 'root' //
// })

//El servicio es nuestra capa de datos
export class ProductsService {

  constructor() { }

  getProducts(){
    return[
      {
        id: 1,
        name: "PC Gamer",
        price : 30000
      }
    ]
  }
}
