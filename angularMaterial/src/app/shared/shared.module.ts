  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';



  @NgModule({
    declarations: [FormFieldValidationErrorsPipe],
    imports: [
      CommonModule
    ],
    exports:[
      FormFieldValidationErrorsPipe,
    ]
  })
  export class SharedModule { }
