import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRollRoutingModule } from './rent-roll-routing.module';
import { RentRollComponent } from './rent-roll.component';


@NgModule({
  declarations: [RentRollComponent],
  imports: [
    CommonModule,
    RentRollRoutingModule
  ]
})
export class RentRollModule { }
