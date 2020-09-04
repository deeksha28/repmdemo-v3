import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeatingExpensesRoutingModule } from './heating-expenses-routing.module';
import { HeatingExpensesComponent } from './heating-expenses.component';


@NgModule({
  declarations: [HeatingExpensesComponent],
  imports: [
    CommonModule,
    HeatingExpensesRoutingModule
  ]
})
export class HeatingExpensesModule { }
