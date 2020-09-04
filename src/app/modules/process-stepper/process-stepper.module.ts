import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessStepperRoutingModule } from './process-stepper-routing.module';
import { ProcessStepperComponent } from './process-stepper.component';


@NgModule({
  declarations: [ProcessStepperComponent],
  imports: [
    CommonModule,
    ProcessStepperRoutingModule
  ]
})
export class ProcessStepperModule { }
