import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfqRoutingModule } from './rfq-routing.module';
import { RfqComponent } from './rfq/rfq.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RfqComponent
  ],
  imports: [
    CommonModule,
    RfqRoutingModule,
    ReactiveFormsModule
  ]
})
export class RfqModule { }
