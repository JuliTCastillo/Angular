import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  loginForm : FormGroup;
  mode = false;
  //MatDialogRef 
  constructor(
    private formBuilder : FormBuilder, 
  ){

    //El objeto que nos va a mandar el formulario
    this.loginForm = this.formBuilder.group({
      user: [
        '',
        [
          Validators.required, 
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          Validators.maxLength(20),
          Validators.minLength(3)
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
    })
  }

  get userControl(){
    return this.loginForm.get("user");
  }

  get passwordControl(){
    return this.loginForm.get("password")
  }

  onSave() : void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
  } 
}
