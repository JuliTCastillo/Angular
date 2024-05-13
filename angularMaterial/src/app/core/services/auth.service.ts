import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";

@Injectable({
    providedIn: 'root'
})

//Vamos a inyectar el servicio en el componente clase09 y products
export class AuthService{
    //Creamos un subject privado para que otros componente no tengas acceso al .next() [ejemplo]
    private _authUser$ = new BehaviorSubject<IUser | null>(null);
    //variable que se va a utilizar para acceder a los valores emitidos
    //se realiza más que nada para la seguridad de los datos, no tiene acceso al .next()
    public authUser$ = this._authUser$.asObservable();

    login(): void{
        this._authUser$.next({
            id: "5",
            createdAt: new Date(),
            email : "user@correo.com",
            firstName : "user01",
            lastName : "users",
            role: "USER",
        })
    }

    logout() : void {
        this._authUser$.next(null);
    }
}