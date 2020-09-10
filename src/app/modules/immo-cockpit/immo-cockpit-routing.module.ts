import { ImmoCockpitComponent } from './immo-cockpit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ImmoCockpitComponent,
    children: [
      { path: 'property/:id', component: ImmoCockpitComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmoCockpitRoutingModule { }
