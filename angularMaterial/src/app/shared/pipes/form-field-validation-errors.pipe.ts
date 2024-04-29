import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  //Le indacamos que va a recibir un validationErrors en el caso tengamos uno, un no-definido o null
  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {
    console.log(value)
    //si el valor llegado es ValidationErrors
    if(value){
      let mensajes : string[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const elementError = value[key];
          console.log(key)
          if(key === "required") mensajes.push("Este campo es requerido");
          if(key === "pattern") mensajes.push("No se puede ingresar numeros");
          if(key === "maxlength") mensajes.push(`No puedes tener más de ${elementError.requiredLength} letras`);
          if(key === "minlength") mensajes.push(`Debes tener más de ${elementError.requiredLength} letras`);
        }
      }
      return mensajes.join(". ");
    }
    return null;
  }

}
