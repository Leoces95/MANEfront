import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudiante, EstudiantesService } from '../servicesBack/estudiantes.service';

@Component({
  selector: 'app-estudiante',
  imports: [FormsModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent implements OnInit{

    estudiante?: Estudiante;
    constructor(
      private router: Router,
      private estudianteServicio: EstudiantesService
    ){}
  
  volver(): void{
    this.router.navigate(['']);
  }

  ngOnInit(): void{
    this.estudiante = this.estudianteServicio.getEstudiantes();
  }

}
