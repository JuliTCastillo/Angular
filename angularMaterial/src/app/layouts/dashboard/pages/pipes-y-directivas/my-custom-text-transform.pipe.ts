import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTextTransform'
})
export class MyCustomTextTransformPipe implements PipeTransform {
  //unknown[desconocido], debemos cambiar el dato por lo que queremos recibir
  //! Nuestro pipe solo puede recibir texto y solamente eso
  transform(value: string, ...args: unknown[]): unknown {
    //Value guarda el valor que le indicamos desde el html
    
    return value.toLocaleUpperCase(); //Muestra el valor en el html
  }

}
