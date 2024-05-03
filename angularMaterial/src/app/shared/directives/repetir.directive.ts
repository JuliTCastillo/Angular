import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(private templateRef : TemplateRef<any>, private viewContainer : ViewContainerRef ) { 
    //Estamos diciendo que queremos repetir 5 veces el template que llego 
    for (let index = 0; index < 5; index++) {
      this.viewContainer.createEmbeddedView(templateRef)
    }
  }

}
