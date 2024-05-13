import { Component, OnInit } from '@angular/core';
import { ISale } from './models';
import { SalesService } from './sales.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})

export class SalesComponent implements OnInit{
  //creamos la variable para mostrarlo en el HTML
  sales : ISale[] = []; 
  //Creamos una variable que controle la carga de datos
  isLoading = false;

  constructor(private salesServices : SalesService){}

  //Realiza todo su código cuando el componente se inicia
  ngOnInit(): void {
    this.loadSales()
  }

  loadSales(){
    //Indicamos que la carga va a empezar
    this.isLoading = true;

    this.salesServices.getSales().subscribe({
      next : (data) => {
        this.sales = data;
      },
      error : () => {},
      complete : () => {
        //Cuando la carga se complete decimos que termino de cargar
        this.isLoading = false
      }
    })
  }
}
