import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitAndLossRoutingModule } from './profit-and-loss-routing.module';
import { ProfitAndLossComponent } from './profit-and-loss.component';
import { ProfitAndLossPortfolioComponent } from './component/profit-and-loss-portfolio/profit-and-loss-portfolio.component';
import { ProfitAndLossPropertyComponent } from './component/profit-and-loss-property/profit-and-loss-property.component';


@NgModule({
  declarations: [ProfitAndLossComponent, ProfitAndLossPortfolioComponent, ProfitAndLossPropertyComponent],
  imports: [
    CommonModule,
    ProfitAndLossRoutingModule
  ]
})
export class ProfitAndLossModule { }
