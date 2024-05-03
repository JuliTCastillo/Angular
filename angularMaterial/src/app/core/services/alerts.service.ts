import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

//Vamos a inyectar el servicio en el componente clase09 y products
export class AlertsService{
    //Para identificar el uso de un observable se coloca al final el signo peso $
    notifier$ = new BehaviorSubject<String | null>(null); //Subject() nos notifica cuando queremos recibir un valor
    //No pudimos hacer uso del Subject(), pero usamos el BehaviorSubject() que es parecido
    //BehaviorSubject la diferencia es que podemos definir un mensaje inicial como (null)
}