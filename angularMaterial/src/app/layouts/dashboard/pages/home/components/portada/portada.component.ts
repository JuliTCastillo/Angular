import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.scss'
})
export class PortadaComponent {
  lista = [
    "Course app.gif",
    "Editing body text.gif",
    "Webinar.gif"
  ]

  portada(){
    const div = document.getElementById("portadaGif")
    
  }
}
