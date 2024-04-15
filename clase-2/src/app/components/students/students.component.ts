import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
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
