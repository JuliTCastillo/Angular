import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscribable, Subscription, takeUntil } from 'rxjs';
import { IUser } from '../users/models';

@Component({
  selector: 'app-clase10',
  templateUrl: './clase10.component.html',
  styleUrl: './clase10.component.scss'
})

//El OnInit es para que ni bien ejecute la lógica dispare el metodo ngOnInit()
export class Clase10Component implements OnInit, OnDestroy{

  usuarioConectado$ = new Subject<boolean>()
  usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);
  componenteDestruido$ = new Subject<boolean>()

  //Variable que acumula las subcripción de dicho subject | Guarda un numero o null
  obtenerUsuarioSubscription?: Subscription;

  login() : void{
    this.usuarioConectado$.next(true)
  }

  ngOnDestroy(): void {
    console.log("Componente destruido");
    this.componenteDestruido$.next(true);
    this.obtenerUsuarioSubscription?.unsubscribe();
  }

  ngOnInit(): void {

    this.usuarioConectado$.subscribe({
      next: (value) =>{
        console.log(value)
        this.usuarioAutenticado$.next({
          id: "1",
          createdAt: new Date(),
          email: "usuario@correo.com",
          firstName: "usuario1",
          lastName: "user",
          role: "ADMIN",
        })  
      }
    })
    
    this.usuarioAutenticado$.subscribe({
      next(value) {
        console.log(value);
      },
    })
    
    //El simbolo de $ indica que va ser un observable
    const obtenerUsuario$ = new Observable((observer)=>{
      //Dentro del Observables usamos la variable para utilizar la función .next()
      observer.next("Hola Mundo") //Acá indicamos que valor que queremos mandar
      let counter = 0;
      setInterval(()=>{
        counter++;
        observer.next(counter)
      }, 1000);
    })


    this.obtenerUsuarioSubscription =  
    //Para obtener el resultado del observable siempre hay que subscribirnos
    obtenerUsuario$
    // .pipe(takeUntil(this.componenteDestruido$))
    .subscribe({
      next: (value)=>{
        console.log(value);        
      },
      error: () =>{},
      complete: ()=>{}
    });

  }
}
