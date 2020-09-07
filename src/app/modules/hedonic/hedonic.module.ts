import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HedonicRoutingModule } from './hedonic-routing.module';
import { HedonicComponent } from './hedonic.component';
import { HedonicPortfolioComponent } from './component/hedonic-portfolio/hedonic-portfolio.component';
import { HedonicPropertyComponent } from './component/hedonic-property/hedonic-property.component';


@NgModule({
  declarations: [HedonicComponent, HedonicPortfolioComponent, HedonicPropertyComponent],
  imports: [
    CommonModule,
    HedonicRoutingModule
  ]
})
export class HedonicModule { }
