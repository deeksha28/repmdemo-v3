import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualicasaRoutingModule } from './qualicasa-routing.module';
import { QualicasaComponent } from './qualicasa.component';
import { QualicasaPropertyComponent } from './component/qualicasa-property/qualicasa-property.component';
import { QualicasaPortfolioComponent } from './component/qualicasa-portfolio/qualicasa-portfolio.component';


@NgModule({
  declarations: [QualicasaComponent, QualicasaPropertyComponent, QualicasaPortfolioComponent],
  imports: [
    CommonModule,
    QualicasaRoutingModule
  ]
})
export class QualicasaModule { }
