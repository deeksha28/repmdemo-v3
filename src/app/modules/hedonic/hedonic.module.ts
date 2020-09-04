import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HedonicRoutingModule } from './hedonic-routing.module';
import { HedonicComponent } from './hedonic.component';


@NgModule({
  declarations: [HedonicComponent],
  imports: [
    CommonModule,
    HedonicRoutingModule
  ]
})
export class HedonicModule { }
