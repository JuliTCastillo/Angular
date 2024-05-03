import { Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges{
  @Input() bgColor = "pink" //Valor por defecto

  constructor(private elementRef : ElementRef) {
    console.log("ResaltadoDirective se ha instanciado")
    console.log(`El elemento es`);
    console.log(this.elementRef)

    this.elementRef.nativeElement.style.fontWeight = 500;
    this.elementRef.nativeElement.style.background = this.bgColor;
    
  } 

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //Si existe en changes la porpiedad bgColor
    if(changes['bgColor']){
      this.elementRef.nativeElement.style.background = changes['bgColor'].currentValue || this.bgColor;
    }
  }
}
