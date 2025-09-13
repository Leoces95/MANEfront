import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptor',
  imports: [],
  templateUrl: './receptor.component.html',
  styleUrl: './receptor.component.css'
})
export class ReceptorComponent {

  constructor(private router: Router){}

  volver(): void{
    this.router.navigate([''])
  }
}
