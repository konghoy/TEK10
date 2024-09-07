import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectszComponent } from './projectsz/projectsz.component';

const routes: Routes = [
  { path : '', component : ProjectszComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectszRoutingModule { }
