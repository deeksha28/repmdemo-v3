import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitAndLossComponent } from './profit-and-loss.component';
import { ProfitAndLossPortfolioComponent } from './component/profit-and-loss-portfolio/profit-and-loss-portfolio.component';
import { ProfitAndLossPropertyComponent } from './component/profit-and-loss-property/profit-and-loss-property.component';

const routes: Routes = [
  {
    path: "",
    component: ProfitAndLossComponent,
    children: [
      { path: 'portfolio/:id', component:ProfitAndLossPortfolioComponent },
      { path: 'property/:id', component: ProfitAndLossPropertyComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitAndLossRoutingModule { }
