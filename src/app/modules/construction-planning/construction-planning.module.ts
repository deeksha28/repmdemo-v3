import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionPlanningRoutingModule } from './construction-planning-routing.module';
import { ConstructionPlanningComponent } from './construction-planning.component';


@NgModule({
  declarations: [ConstructionPlanningComponent],
  imports: [
    CommonModule,
    ConstructionPlanningRoutingModule
  ]
})
export class ConstructionPlanningModule { }
