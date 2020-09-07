import { ConstructionPlanningComponent } from './construction-planning.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ConstructionPlanningComponent,
    children: [
      { path: 'portfolio/:id', component: ConstructionPlanningComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionPlanningRoutingModule { }
