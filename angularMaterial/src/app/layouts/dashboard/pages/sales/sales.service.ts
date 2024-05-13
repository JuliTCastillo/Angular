import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { ISale } from "./models";

const SALES_DB : ISale[] = [
    {
        id: 1,
        buyer: {
            id: "1",
            createdAt: new Date(),
            email: "some@gmail.com",
            firstName: "test",
            lastName: "test",
            role: "USER"
        },
        product: {
            id: 1,
            name: "Curso python",
            price: 15000,
        },
        quantity: 2
    }
] 

@Injectable({
    providedIn: 'root'
})

export class SalesService{

    //httpClient usa cuando tenemos la API lista
    // constructor(private httpClient : HttpClient){}
    constructor(){}

    //Obtiene todos los cursos
    getSales() : Observable<ISale[]>{
        return of(SALES_DB).pipe(delay(1500)) //El of() crea un observable
    }

    //Crear
    createSales(newSales : ISale){
        SALES_DB.push(newSales)
        return of(SALES_DB)
    }

    // //Eliminar
    deleteSales(id : number){
        return of(SALES_DB.filter((sale)=> sale.id != id))
    }

    // //modificar
    updateSale(id : number, data : ISale){
        return of(
            SALES_DB.map((sale)=> (sale.id === id ? {...sale, ...data} : sale))
        )
    }
}