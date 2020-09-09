import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DcfRoutingModule } from './dcf-routing.module';
import { DcfComponent } from './dcf.component';
import { DcfPortfolioComponent } from './component/portfolio/dcf-portfolio/dcf-portfolio.component';
import { DcfPropertyComponent } from './component/property/dcf-property/dcf-property.component';


@NgModule({
  declarations: [DcfComponent, DcfPortfolioComponent, DcfPropertyComponent],
  imports: [
    CommonModule,
    DcfRoutingModule,
    NgbModule
  ]
})
export class DcfModule { }
