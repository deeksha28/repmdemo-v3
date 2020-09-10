import { DuplicatePropComponent } from './duplicate-prop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: DuplicatePropComponent,
    children: [
      { path: 'portfolio/:id', component: DuplicatePropComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuplicatePropRoutingModule { }
