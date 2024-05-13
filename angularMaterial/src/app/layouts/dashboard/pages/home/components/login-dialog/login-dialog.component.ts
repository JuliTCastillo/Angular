import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent implements OnInit{
  loginForm : FormGroup;
  mode = false;

  //MatDialogRef 
  constructor(
    private formBuilder : FormBuilder, 
    private loginService : LoginService,
    private matDialogRef : MatDialogRef<LoginDialogComponent>,
  ){

    //El objeto que nos va a mandar el formulario
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
    })
  }

  ngOnInit(): void {
  }

  get userControl(){
    return this.loginForm.get("email");
  }

  get passwordControl(){
    return this.loginForm.get("password")
  }

  login() : void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else{
      this.loginService.login(this.loginForm.getRawValue());
      this.matDialogRef.close(this.loginForm.value);
      console.log("debería cerrarse");
      
    }
  } 
}
