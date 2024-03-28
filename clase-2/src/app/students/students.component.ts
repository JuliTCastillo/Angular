import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  listaVisible = false;
  estudiantes = [
    {
      nombre: "Julieta",
      apellido: "Castillo",
      rol: "estudiante"
    },
    {
      nombre: "Nicolas",
      apellido: "Gomez",
      rol: "estudiante"
    },
    {
      nombre: "Micaela",
      apellido: "Gonzalez",
      rol: "estudiante"
    },
    {
      nombre: "Franco",
      apellido: "Rodriguez",
      rol: "docente"
    }
  ]

  //Metodos
  visualizarLista(){
    this.listaVisible = !this.listaVisible;
  }
}
