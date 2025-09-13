import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universidad',
  imports: [],
  templateUrl: './universidad.component.html',
  styleUrl: './universidad.component.css'
})
export class UniversidadComponent {

  constructor(private router: Router){}
  
  volver(): void{
    this.router.navigate(['']);
  }
}
