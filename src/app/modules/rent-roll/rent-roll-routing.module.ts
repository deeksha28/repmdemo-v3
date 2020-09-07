import { RentRollComponent } from './rent-roll.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: RentRollComponent,
    children: [
      { path: 'property/:id', component: RentRollComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRollRoutingModule { }
