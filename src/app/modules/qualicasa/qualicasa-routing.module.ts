import { QualicasaComponent } from './qualicasa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualicasaPortfolioComponent } from './component/qualicasa-portfolio/qualicasa-portfolio.component';
import { QualicasaPropertyComponent } from './component/qualicasa-property/qualicasa-property.component';

const routes: Routes = [
  {
    path: "",
    component: QualicasaComponent,
    children: [
      { path: 'portfolio/:id', component: QualicasaPortfolioComponent },
      { path: 'property/:id', component: QualicasaPropertyComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualicasaRoutingModule { }
