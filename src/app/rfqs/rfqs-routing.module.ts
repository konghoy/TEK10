import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RfqsComponent } from './rfqs/rfqs.component';

const routes: Routes = [
  { path : '', component : RfqsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfqsRoutingModule { }
