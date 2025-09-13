import { Routes } from '@angular/router';
import { UniversidadComponent } from './universidad/universidad.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ReceptorComponent } from './receptor/receptor.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'universidad', component: UniversidadComponent},
    {path:'estudiante', component: EstudianteComponent},
    {path:'receptor', component: ReceptorComponent}
];
