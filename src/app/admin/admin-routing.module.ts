import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent }         from './item/item/item.component';
import { ProjectosComponent }    from './projectos/projectos/projectos.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones/cotizaciones.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'item',
        component: ItemComponent,
        data: {
          title: 'Item'
        }
      },
      {
        path: 'projectos',
        component: ProjectosComponent,
        data: {
          title: 'pROJECT'
        }
      },
      {
        path: 'cotizaciones',
        component: CotizacionesComponent,
        data: {
          title: 'cotizaciones'
        }
      },
      {
        path: 'validaciones',
        component: CotizacionesComponent,
        data: {
          title: 'validaciones'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
