import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualicasaRoutingModule } from './qualicasa-routing.module';
import { QualicasaComponent } from './qualicasa.component';


@NgModule({
  declarations: [QualicasaComponent],
  imports: [
    CommonModule,
    QualicasaRoutingModule
  ]
})
export class QualicasaModule { }
