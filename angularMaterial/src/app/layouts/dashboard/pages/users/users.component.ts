import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'createdAt',
    'actions'
  ];

  loading = false;

  users: IUser[] = [];

  //El dialogo solo va a tener acceso en esta clase
  constructor(private matDialog: MatDialog, private usersService: UsersService) { }

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        console.log('next: ', users);
        this.users = users;
      },
      error: (err) => {
        console.log('error: ', err);
        Swal.fire('Error', 'Ocurrio un error', 'error');
      },
      complete: () => {
        console.log('complete');
        this.loading = false;
      },
    });
  }

  openDialog(): void {
    //el afterClose recibe algo, cuando se cierra el dialogo
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed() //Retorna un observable
      .subscribe({   //Recibe el dato 
        next: (result) => { //Obtiene el resultado del modal
          console.log(result) //Mostramos
          if (result) {
            //Logica de crear el usuario
            //El push no funciona, para que angular pueda detectar el cambio se debe asignar en un nuevo array
            // result.id = this.users.length + 1;
            result.createdAt = new Date();
            
            this.usersService.createUser(result).subscribe({
              next:(usuarioCreado)=>{
                this.users = [...this.users, usuarioCreado] 
              }
            })
            Toastify({
              text: "Usuario Creado!!",
              className: "info",
              gravity: "bottom", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,105,1) 35%, rgba(255,0,185,1) 100%);",
              } 
            }).showToast();
          }
        }
      });
  }

  onDeleteUser(element: IUser): void {
    Swal.fire({
      title: "Eliminar usuario",
      text: `Estas seguro que queres eliminar a ${element.firstName} ${element.lastName}`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // console.log(this.users)
        this.usersService.deleteUsersById(element.id).subscribe({
          next: (users) => {
            console.log('next: ', users);
          },
          complete: ()=>{
            Swal.fire("Usuario Eliminado!", `Se borro a ${element.firstName} ${element.lastName}`, "success");
            this.users = this.users.filter(user => user.id != element.id);
          }
        })
      } else {
        Toastify({
          text: "Se cancelo la operación!!",
          className: "info",
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          style: {
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,105,1) 35%, rgba(255,0,185,1) 100%);",
          }
        }).showToast();
      }
    });
  }

  onUpdateUser(user: IUser): void {
    console.log(user)
    this.matDialog
      .open(UserDialogComponent, {
        data: user //Le mandamos la data del usuario
      })
      .afterClosed() //Retorna un observable
      .subscribe({   //Recibe el dato 
        next: (result) => { //Obtiene el resultado del modal
          // result.id = user.id;
          result.createdAt = new Date();
          
          this.usersService.updateUsersById(user.id, result).subscribe({
            next:()=>{
              //Si en el mapeo encontramos un usuario con la misma id, lo pisamos con lo que nos llego, sino lo dejamos igual
              this.users = this.users.map((u) => u.id == user.id ? { ...u, ...result } : u)
            }
          })
          console.log(result) //Mostramos
          Toastify({
            text: "Se edito el usuario!!",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,105,1) 35%, rgba(255,0,185,1) 100%);",
            }
          }).showToast();
        }
      })
  }
}
