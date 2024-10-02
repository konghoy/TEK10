import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { CapacidadComponent } from './capacidad/capacidad/capacidad.component';
import { PerfilComponent } from './perfil/perfil/perfil.component';


@NgModule({
  declarations: [
    CapacidadComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
