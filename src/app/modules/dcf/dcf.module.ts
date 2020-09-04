import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DcfRoutingModule } from './dcf-routing.module';
import { DcfComponent } from './dcf.component';


@NgModule({
  declarations: [DcfComponent],
  imports: [
    CommonModule,
    DcfRoutingModule
  ]
})
export class DcfModule { }
