import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsproRoutingModule } from './mapspro-routing.module';
import { MapsproComponent } from './mapspro.component';


@NgModule({
  declarations: [MapsproComponent],
  imports: [
    CommonModule,
    MapsproRoutingModule
  ]
})
export class MapsproModule { }
