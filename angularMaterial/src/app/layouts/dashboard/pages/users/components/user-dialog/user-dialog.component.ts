import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  userForm : FormGroup;
  mode = false;
  //MatDialogRef 
  constructor(
    private formBuilder : FormBuilder, 
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editUser? : IUser
  ){
    console.log(editUser)
    //El objeto que nos va a mandar el formulario
    this.userForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required, 
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          Validators.maxLength(20),
          Validators.minLength(3)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required, 
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          Validators.maxLength(20),
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')
        ]
      ],
      role: [['USER'],[Validators.required]]
    })

    if(editUser != null){
      this.mode = true;
      this.userForm.patchValue(editUser)
    }
  }

  get firstNameControl(){
    return this.userForm.get("firstName");
  }

  get lastNameControl(){
    return this.userForm.get("lastName")
  }

  onSave() : void{
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }
    else{
      if(this.editUser){
        this.matDialogRef.close(this.userForm.value);  
      }
      else{
        //Si el Form es valido e indicamos que información queremos mandarle
        this.matDialogRef.close(this.userForm.value);
      }
    }
  } 
}
