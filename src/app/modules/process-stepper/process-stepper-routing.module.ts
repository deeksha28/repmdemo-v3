import { ProcessStepperComponent } from './process-stepper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ProcessStepperComponent,
    children: [
      { path: 'property/:id', component: ProcessStepperComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessStepperRoutingModule { }
