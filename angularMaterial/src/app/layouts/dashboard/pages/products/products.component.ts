import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

//implementamos el ciclo de vida de OnInit que es una interfaz
export class ProductsComponent implements OnInit{
  displayedColumns = ["id", "name", "price", "actions"];

  //? Muy importante crear la interfaz del array
  products : IProduct[] = [];

  //Para usar el servicio debemos crear el constructor
  //Es muy importante colocar el private o public
  // TODO: Para identificar un servicio al nombre se le coloca un _nombre
  constructor(
    private _miServicio : ProductsService,
    private _alertsService : AlertsService
  ){
    //Vamos a recibir el mensaje del alertsServices que se emitio en el componente clase09
    this._alertsService.notifier$.subscribe({
      next: (mensaje => console.log(mensaje))
    })
  }

  //Importante poner la función para cumplir el contrato de la implementación 
  ngOnInit(): void {
    //ngOnInit se usa para hacer consulta con el servicio
    this.products = this._miServicio.getProducts();
  }
}
