import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CockpitRoutingModule } from './cockpit-routing.module';
import { CockpitComponent } from './cockpit.component';


@NgModule({
  declarations: [CockpitComponent],
  imports: [
    CommonModule,
    CockpitRoutingModule
  ]
})
export class CockpitModule { }
