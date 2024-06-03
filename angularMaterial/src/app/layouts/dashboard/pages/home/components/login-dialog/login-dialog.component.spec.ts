import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing"
import { LoginDialogComponent } from "./login-dialog.component";
import { SharedModule } from "../../../../../../shared/shared.module";
import { MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { LoginService } from "../../../../../../core/services/login.service";

describe("LoginComponent", () =>{
    //Es para obtener todas las funcionalidades del componente
    let component : LoginDialogComponent; 
    let fixture : ComponentFixture<LoginDialogComponent>;
    let loginService : LoginService
    let matDialogRef : MatDialogRef<LoginDialogComponent>
    let dialogRefSpy: jasmine.SpyObj<MatDialogRef<LoginDialogComponent>>;
    /****
     * BeforeEach Establece o crear un testing modulo
     * que hace todas las importaciones que se va a usar en las puerbas
     ****/
    beforeEach(()=>{
        dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

        //TestBed: Define nuestro testing modulo
        TestBed.configureTestingModule({
            declarations: [LoginDialogComponent], //testeamos el .ts
            imports : [SharedModule, BrowserAnimationsModule],
            providers:[
                // Proporcionar un MatDialogRef falso
                {
                    provide: MatDialogRef,
                    useValue: dialogRefSpy 
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginDialogComponent)
        //Debemos poner el .componentInstance porque contiene la instancia del componente creado
        component = fixture.componentInstance;
        loginService = TestBed.inject(LoginService);
        matDialogRef = TestBed.inject( MatDialogRef<LoginDialogComponent>);
        fixture.detectChanges(); //Mantiene activo los cambios de las propiedades
    });
    //Indicamos el nombre del caso 
    it("El campo email debe ser requerido", () => {
        //guardamos el campo email en una variable
        const control = component.loginForm.get("email");
        //seteamos el valor para testearlo
        control?.setValue('');
        
        //"Preguntamos" lo que queremos testear
        //Preguntamos si el campos es requerido, tiene que ser igual True
        expect(control?.hasError('required')).toBeTrue();
    })
    it("El campo contraseña debe ser requerido", () => {
        //guardamos el campo email en una variable
        const control = component.loginForm.get("password");
        //seteamos el valor para testearlo
        control?.setValue('');
        
        //"Preguntamos" lo que queremos testear
        //Preguntamos si el campos es requerido, tiene que ser igual True
        expect(control?.hasError('required')).toBeTrue();
    })
    it("Llamar MarkAllAsTouched de loginForm al llamar a login, si el formulario es invalido",()=>{
        component.loginForm.setValue({
            email: "",
            password: ""
        })

        expect(component.loginForm.invalid).toBeTrue();

        //Creamos un espia para evaluamos si la función de MarkAllAsTouched se llama
        const spyOnMarkAllAsTouched = spyOn(component.loginForm, "markAllAsTouched");
        component.login()
        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    })

    it("Si el formulario es correcto", fakeAsync(()=>{
        component.loginForm.setValue({
            email: "juli@correo.com",
            password: "aprende"
        })
        expect(component.loginForm.valid).toBeTrue();

        // Creamos un espía para el servicio de inicio de sesión
        const spyOnLogin = spyOn(loginService, "login");
        component.login()
        expect(spyOnLogin).toHaveBeenCalled();
        tick();
        // Llamamos al método login
        component.login();
        expect(dialogRefSpy.close).toHaveBeenCalled();
    }))
})