import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HedonicComponent } from './hedonic.component';

const routes: Routes = [
  {
    path: "",
    component: HedonicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HedonicRoutingModule { }
