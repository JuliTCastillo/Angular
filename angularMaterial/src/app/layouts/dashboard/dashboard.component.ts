import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from './pages/users/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  showFiller = false;
  mostrarComponente = true; 
  //Va a guardar el valor del observable
  authUser$ : Observable<IUser | null>;
  
  constructor(private authService : AuthService){
    //Le asignamos el valor, ahora podemos mostrarlo en el HTML
    this.authUser$ = this.authService.authUser$;
  }

  ngOnInit(): void {}


  login() : void{
    this.authService.login();
  }

  logout() : void{
    this.authService.logout();
  }
  isMobile(): boolean{
    return window.innerWidth <= 280;
  }

  
}
