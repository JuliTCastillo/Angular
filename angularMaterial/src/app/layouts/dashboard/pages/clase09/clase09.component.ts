import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-clase09',
  templateUrl: './clase09.component.html',
  styleUrl: './clase09.component.scss'
})
export class Clase09Component {
  //Inyectamos el servicio de AlertsService
  constructor(private _alertsService : AlertsService){
    // this.obtenerResultado();
    this.runReloj();
    this._alertsService.notifier$.next("Mensaje del componente clase09");
  }

  runReloj(){
    let count = 3;
    //Uso de observable | se importa el Obsevable que va a recibir un callback
    //En este caso no vamos a pasar el resolve y reject, samos a pasar un observer
    const obs = new Observable((observer)=>{
      //observer.error("Error al obtener la fecha") //Implicitamente estamos diciendo que sucedio un ERROR
      //El observer hacer referencia a quien esta escuchando al observable
      setInterval(()=>{ //Podemos usar un setInterval para que mande los datos en un determinado tiempo
        count--
        //Mandamos más de un dato | esto en las promesas no se puede, solo manda un dato
        observer.next(new Date())
        //Generamos una condición para dejar de emitir valores
        if (count === 0) observer.complete() //Indicamos que terminamos de mandar datos
      }, 2000)
      //*El .next sirve para mandarle algo 
    })

    //Para escuchar la emision de un observable, le dicemos a la const que se subcriba a la emision 
    obs.subscribe({
      //El subcribe recibe un objecto y utiliza 3 propiedades:
      next: (resultado) => { //Es el equivalente del .then de la promesa
        console.log(resultado);
      }, 
      error: (error) => {//Equivalente al .catch
        console.error(error); //En el caso de que haya un error, no se ejecuta el .next
      }, 
      complete: () => {//Equvalente al .finally
        //Esta función es un disparador, se ejecuta una vez que el observable termino
        console.log("El reloj dejo de emitir valores");        
      } 
    })
  }


  //Las promesas deben estar en una función asicrona
  //! NO SE PUEDE USAR EL async EN EL CONSTRUCTOR
  async obtenerResultado(){
    console.log("Inicio");
    
    /**¿Qué es una promesa?**/
    // una promesa es un codigo que se ejecuta de forma asincronica, en otro tiempo
    // se puede cumpli o no | 
    const meDevolveraElDinero = new Promise((resolve, reject)=>{
      setTimeout(()=>{ //Se toma 3s para devolver el dinero
        resolve(true)
      }, 3000)
    });
    //Para acceder a la resolución de la promesa llamamos a la constante
    //* then() = lo usamos cuando queremos manejar la resolución de la promesa
    //Si queremos que la ejecución espere a la promesa usamos la palabra await
    //! Solo podemos usar el await si estamos en una función async
    await meDevolveraElDinero
    .then((resultadoPromesa)=>{
      console.log(resultadoPromesa);
    })
    .catch() //Para errores
    .finally() //Para el final de la promesa
  
    console.log("Final");
  }
  
}
