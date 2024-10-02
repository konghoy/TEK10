import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { CapacidadComponent } from './capacidad/capacidad/capacidad.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,
        data: {
          title: 'Perfil'
        }
      },
      {
        path: 'capacidad',
        component: CapacidadComponent,
        data: {
          title: 'Capacidad'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
