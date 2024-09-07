import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectszRoutingModule } from './projectsz-routing.module';
import { ProjectszComponent } from './projectsz/projectsz.component';


@NgModule({
  declarations: [
    ProjectszComponent
  ],
  imports: [
    CommonModule,
    ProjectszRoutingModule
  ]
})
export class ProjectszModule { }
