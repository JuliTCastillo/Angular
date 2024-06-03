import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";
import { ILoginData } from "../../layouts/dashboard/pages/home/components/login-dialog/models";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private MOCK_AUTH_USER : IUser = {
        createdAt: new Date(),
        firstName: "Julieta",
        lastName: "Castillo",
        email: "juli@correo.com",
        role: "ADMIN",
        id: "3c88"
    }
    private _authUser$ = new BehaviorSubject<IUser | null>(null);
    public authUser$ = this._authUser$.asObservable();

    constructor(private router: Router) {}

    login(data:ILoginData) : void{
        if(data.email !== "juli@correo.com" || data.password !== "aprende"){
            alert("Correo o password incorrectos")
        }
        else{
            this._authUser$.next(this.MOCK_AUTH_USER);
            localStorage.setItem('accessToken', "asjnjweneidasasassdddd")
            this.router.navigate(['dashboard', 'home']);
        }
    }

    verifyToken() : boolean{
        //estamos preguntando si este token existe
        const token = localStorage.getItem('accessToken');
        return !!token

    }

    logout() : void{
        this._authUser$.next(null)
        localStorage.removeItem("accessToken")
    }
}