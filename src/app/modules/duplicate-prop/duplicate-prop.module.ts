import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuplicatePropRoutingModule } from './duplicate-prop-routing.module';
import { DuplicatePropComponent } from './duplicate-prop.component';


@NgModule({
  declarations: [DuplicatePropComponent],
  imports: [
    CommonModule,
    DuplicatePropRoutingModule
  ]
})
export class DuplicatePropModule { }
