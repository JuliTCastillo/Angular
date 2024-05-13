import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'title-home',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements AfterViewInit, OnInit{
  palabras = ["Diseño", "Python", "Desarrollo web"]

  @ViewChild('boxPadre') boxPadre!: ElementRef;
  @ViewChildren('box') boxRefs!: QueryList<ElementRef>;

  constructor(private cdr: ChangeDetectorRef) {} // Inyecta ChangeDetectorRef

  ngOnInit(): void {}
  

  ngAfterViewInit(): void {
    console.log(this.boxPadre);
    this.agregandoAnimacion();
  }


  agregandoAnimacion(){
        // Trabaja con la lista de elementos boxRefs
    this.boxRefs.forEach((boxRef, index) => {
      const box = boxRef.nativeElement as HTMLElement;
      // Aquí puedes aplicar la lógica para cada elemento .box
      const duration = 3000;
      const startTime = performance.now();

      this.calcularRotacion(startTime, duration, box);

      // Agregar escucha de evento animationend para la clase secundaria
      box.addEventListener('animationend', (nom) => {
        console.log('La animación secundaria ha terminado. ', nom.animationName.split('_')[2]);
        // Realizar acciones adicionales cuando la animación secundaria ha terminado
        if (box.classList.contains('secundario')) {
            box.classList.add('animacion');
            box.style.transform = "rotate(-180deg)"; // No necesitas usar !important si no hay conflictos de especificidad
        }
        if (nom.animationName.split('_')[2] == "boxSecundario") {
            box.classList.remove("boxSecundario")
            setTimeout(() => {
                box.classList.add("animate")
            }, 5000)

            // Re-inicia la animación después de 5 segundos (ajusta el tiempo según sea necesario)
            setTimeout(() => {
                box.classList.add("animate");
            }, 5000);
        }

    });
    });
  }
  calcularRotacion(startTime: number, duration: number, box: HTMLElement) {
    box.classList.add("animate")
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = (elapsedTime % duration) / duration; // Normalizar el progreso entre 0 y 1

    let rotation;
    if (progress <= 0.5) {
      rotation = -90 * (progress * 2); // Rotación de 0 a -90 grados en la primera mitad
    } else {
      rotation = -90 + ((progress - 0.5) * 180); // Rotación de -90 a -150 grados en la segunda mitad
    }
    rotation = Math.floor(rotation)

    // Verificar si la rotación es -90 grados
    if (rotation == -90) {
        box.classList.remove('animate');      
    }

    // Si la animación no ha terminado, continuar calculando la rotación
    if (elapsedTime < duration) {
      requestAnimationFrame(() => this.calcularRotacion(startTime, duration, box));
    }
  }
  
  centrarPalabra(palabra: string, longitudMaxima: number) : string {
    let espacios = longitudMaxima - palabra.length;
    for(let i = 0; i <= espacios; i++){
      if(i%2 == 0){
        palabra = palabra.concat(' ');
      }
      else{
        palabra = palabra.padStart(palabra.length + 1, ' ');
      }
    }
    return palabra;
  }
}
