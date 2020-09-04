import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmoCockpitRoutingModule } from './immo-cockpit-routing.module';
import { ImmoCockpitComponent } from './immo-cockpit.component';


@NgModule({
  declarations: [ImmoCockpitComponent],
  imports: [
    CommonModule,
    ImmoCockpitRoutingModule
  ]
})
export class ImmoCockpitModule { }
