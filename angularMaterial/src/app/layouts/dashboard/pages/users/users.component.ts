import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'createdAt'];

  users: IUser[]=[
    {
      id: 1,
      firstName : "Julieta",
      lastName : "Castillo",
      email : "Julieta@correo.com",
      createdAt : new Date()
    },
    {
      id: 2,
      firstName : "Valentina",
      lastName : "Castillo",
      email : "Julieta@correo.com",
      createdAt : new Date()
    },
    {
      id: 3,
      firstName : "Rocio",
      lastName : "Castillo",
      email : "Julieta@correo.com",
      createdAt : new Date()
    }
  ]
  
  //El dialogo solo va a tener acceso en esta clase
  constructor(private matDialog:MatDialog){}

  openDialog(): void {
    //el afterClose recibe algo, cuando se cierra el dialogo
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next:(result)=>{
          console.log(result)
          if(result){
            //Logica de crear el usuario
            //El push no funciona, para que angular pueda detectar el cambio se debe asignar en un nuevo array
            this.users = [...this.users, result]
          }
        }
      });
  }
}
