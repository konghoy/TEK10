import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ItemComponent } from './item/item/item.component';
import { ProjectosComponent } from './projectos/projectos/projectos.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones/cotizaciones.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';


@NgModule({
  declarations: [
    ItemComponent,
    ProjectosComponent,
    CotizacionesComponent,
    UsuariosComponent    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
