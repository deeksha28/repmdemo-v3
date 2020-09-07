import { RatingComponent } from './rating.component';
import { RatingModule } from './rating.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: RatingComponent,
    children: [
      { path: 'property/:id', component: RatingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingRoutingModule { }
