import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditAppRoutingModule } from './credit-app-routing.module';
import { CreditAppComponent } from './credit-app.component';


@NgModule({
  declarations: [CreditAppComponent],
  imports: [
    CommonModule,
    CreditAppRoutingModule
  ]
})
export class CreditAppModule { }
