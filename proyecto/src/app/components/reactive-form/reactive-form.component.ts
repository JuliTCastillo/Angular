import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss' // Esto causará un error ya que 'styleUrl' no es una propiedad válida
})
export class ReactiveFormComponent {
  viewMessageError : boolean = false;
  formUser = this.formBuilder.group({
    name: this.formBuilder.control('', [
      Validators.required
    ]),
    lastname: this.formBuilder.control('', [
      Validators.required
    ]),
    dni: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private formBuilder: FormBuilder){}

  sendInfo(): void{
    if (this.formUser.status === 'VALID'){
      Swal.fire({
        title: "Formulario Completo!",
        icon: "success"
      });
    }
    else{
      Swal.fire({
        title: "Formulario Incompleto!",
        text: "Compruebe que los campos esten completos!",
        icon: "error"
      });
    }
  }

  get nameControl(){
    return this.formUser.get('name');
  }
  get lastNameControl(){
    return this.formUser.get('lastname');
  }
  get dniControl(){
    return this.formUser.get('dni');
  }
  get emailControl(){
    return this.formUser.get('email');
  }

  // Método para permitir solo números en el campo de entrada
  allowNumbers(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const inputChar = event.key;
  
    // Si la tecla presionada no es un número o la tecla de retroceso, prevenir el comportamiento predeterminado y mostrar el mensaje de error
    if (!allowedChars.test(inputChar) && event.key !== 'Backspace') {
      event.preventDefault();
      this.viewMessageError = true; // Mostrar el mensaje de error
      setTimeout(() => this.viewMessageError = false, 2000); // Ocultar el mensaje después de 3 segundos
    }
  }
  
}
