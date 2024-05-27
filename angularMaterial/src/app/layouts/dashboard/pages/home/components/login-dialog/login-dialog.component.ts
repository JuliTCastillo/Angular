import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; // Importamos MatDialogRef
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  dialogRef: MatDialogRef<LoginDialogComponent>; // Declaramos matDialogRef como una propiedad
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dialogref: MatDialogRef<LoginDialogComponent> // Inyectamos MatDialogRef en el constructor
  ) {
    this.dialogRef = dialogref;
    // Construimos el formulario
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          Validators.maxLength(20),
          Validators.minLength(3)
        ]
      ],
    });
  }

  ngOnInit(): void {
  }

  // Método para obtener el control del campo de correo electrónico
  get userControl() {
    return this.loginForm.get("email");
  }

  // Método para obtener el control del campo de contraseña
  get passwordControl() {
    return this.loginForm.get("password")
  }

  // Método para iniciar sesión
  login(): void {
    // Verificamos si el formulario es inválido
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      // Realizamos la acción de inicio de sesión
      this.loginService.login(this.loginForm.getRawValue());
       // Esperar a que se complete la acción asíncrona (cierre del diálogo)

      // Cerramos el diálogo utilizando el dialogRef inyectado
      this.dialogRef.close(this.loginForm.value);
      console.log("El diálogo debería cerrarse");
    }
  }
}
