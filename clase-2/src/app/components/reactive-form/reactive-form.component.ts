import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  myForm = this.formBuilder.group({
    name : this.formBuilder.control(''),
    lastname : this.formBuilder.control(''),
    dni : this.formBuilder.control(0),
    email : this.formBuilder.control('')
  });

  constructor(private formBuilder: FormBuilder) {}
}