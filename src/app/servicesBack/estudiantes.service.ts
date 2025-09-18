import { Injectable } from '@angular/core';

export interface Estudiante{
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  telefono?: string
}

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor() { }

  private estudiante: Estudiante = {
    id: 3,
    nombre: "Leo",
    apellido: "Europa",
    edad: 19,
    telefono: "3013010101"
  }

  getEstudiantes(): Estudiante{
    return this.estudiante;
  };

}
