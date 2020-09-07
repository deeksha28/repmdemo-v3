import { DcfComponent } from './dcf.component';
import { DcfPortfolioComponent } from './component/portfolio/dcf-portfolio/dcf-portfolio.component';
import { DcfPropertyComponent } from './component/property/dcf-property/dcf-property.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: DcfComponent,
    children: [
      { path: 'portfolio/:id', component: DcfPortfolioComponent },
      { path: 'property/:id', component: DcfPropertyComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcfRoutingModule { }
