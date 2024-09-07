import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuysComponent } from './buys/buys.component';

const routes: Routes = [
  { path : '', component : BuysComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuysRoutingModule { }
