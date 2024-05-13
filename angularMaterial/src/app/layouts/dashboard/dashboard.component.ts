import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from './pages/users/models';
import { HomeComponent } from './pages/home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './pages/home/components/login-dialog/login-dialog.component';
import { GuardResult } from '@angular/router';
import { LoginService } from './pages/home/components/login-dialog/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  showFiller = false;
  mostrarComponente = true; 
  isAuth = this.loginService.verifyToken();
  //Va a guardar el valor del observable
  // authUser$ : Observable<IUser | null>;
  constructor(
    // private authService : AuthService,
    private loginService  : LoginService,
    private matDialog:MatDialog,
  ){
    //Le asignamos el valor, ahora podemos mostrarlo en el HTML
    // this.authUser$ = this.authService.authUser$;
  }

   public openDialog(): void {
     //el afterClose recibe algo, cuando se cierra el dialogo
     this.matDialog
       .open(LoginDialogComponent)
       .afterClosed() //Retorna un observable
       .subscribe({   //Recibe el dato 
         next:(result)=>{ //Obtiene el resultado del modal
           console.log(result) //Mostramos
           if(result){
             //Logica de crear el usuario
             //El push no funciona, para que angular pueda detectar el cambio se debe asignar en un nuevo array
             console.log(result)    
             this.isAuth = this.loginService.verifyToken()

           }
         }
       });
   }

  ngOnInit(): void {
    
  }


  // login() : void{
  //   this.authService.login();
  // }

  logout() : void{
    // this.authService.logout();
  }
  isMobile(): boolean{
    return window.innerWidth <= 280 ;
    // return true
  }

  
}
