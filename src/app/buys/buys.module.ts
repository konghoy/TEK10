import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuysRoutingModule } from './buys-routing.module';
import { BuysComponent } from './buys/buys.component';


@NgModule({
  declarations: [
    BuysComponent
  ],
  imports: [
    CommonModule,
    BuysRoutingModule
  ]
})
export class BuysModule { }
