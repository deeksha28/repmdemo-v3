import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HedonicComponent } from './hedonic.component';
import { HedonicPortfolioComponent } from './component/hedonic-portfolio/hedonic-portfolio.component';
import { HedonicPropertyComponent } from './component/hedonic-property/hedonic-property.component';

const routes: Routes = [
  {
    path: "",
    component: HedonicComponent,
    children: [
      { path: 'portfolio/:id', component:HedonicPortfolioComponent },
      { path: 'property/:id', component: HedonicPropertyComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HedonicRoutingModule { }
