import { MapsproComponent } from './mapspro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: MapsproComponent,
    children: [
      { path: 'property/:id', component: MapsproComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsproRoutingModule { }
