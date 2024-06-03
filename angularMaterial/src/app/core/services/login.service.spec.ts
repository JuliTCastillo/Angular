import { TestBed } from "@angular/core/testing"
import { LoginService } from "./login.service"
import { Route, Router } from "@angular/router";
import { inject } from "@angular/core";

describe('Testeamos el authService', () =>{
    let authService : LoginService;
    let router : Router;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[LoginService]
        })
        authService = TestBed.inject(LoginService);
        router = TestBed.inject(Router);
    })

     it("Se debe establecer un usuario autenticado al llamar login", ()=>{
        //Los espia siempre se inician al principio, sino no tira error
        const spyOnSetItem = spyOn(localStorage, 'setItem') //Creamos al espia y que "vigile" a tal metodo
        const spyOnNavigate = spyOn(router, 'navigate')
        //Debemos llamar al metodo login con el objeto del form para realizar pruebas
        authService.login({
            email: "juli@correo.com",
            password : "aprende"
        })
        //utilizamos al subscribe para saber si los datos enviados están bien
        authService.authUser$.subscribe({
            next:(authUser) =>{
                expect(authUser).toBeTruthy() //verifica que lo que llegue no sea nulo  
                expect(spyOnSetItem).toHaveBeenCalled(); //Verificamos si en algun momento se llama al metodo
                expect(spyOnNavigate).toHaveBeenCalled();
            }
        })
     })
     
     it("se debe demostrar un alert de 'Correo o password incorrectos' si los datos no son correctos en el login", ()=>{
        const spyOnAlert = spyOn(window, 'alert')
        authService.login({
            email: "test@correo.com",
            password: "123123"
        })

        expect(spyOnAlert).toHaveBeenCalledWith('Correo o password incorrectos');
    })

    it("Se debe verificar si el token de 'access token' existe en el localStrogare para darle acceso al usuario, debe ser verdadero", ()=>{
        const spyOnLocalStorage = spyOn(localStorage, 'getItem');
        authService.verifyToken();
        expect(spyOnLocalStorage).toBeTruthy();
    })

    // it("en el caso de que el token 'access token' no exista debe dar falso", ()=>{
    //     const spyOnLocalStorage = spyOn(localStorage, "getItem");
    //     authService.verifyToken()
    //     expect(spyOnLocalStorage).toBeFalsy()
    // })

})