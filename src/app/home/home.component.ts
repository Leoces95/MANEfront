import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  nombre: string;
  seccion: string;
  constructor(private router: Router){
    this.nombre = "Leoces";
    this.seccion = "biblioteca";
  }

  universidad():void{
    this.router.navigate(['/universidad']);
    alert(`${this.nombre} colección, camino a la Universidad...`);
  }

  estudiante(): void{
    this.router.navigate(['/estudiante']);
    alert(`bienvenido ${this.nombre} a la sección de ${this.seccion}`)
  }

  receptor():void{
    this.router.navigate(['/receptor']);
    alert("Receptor");
  }
}
