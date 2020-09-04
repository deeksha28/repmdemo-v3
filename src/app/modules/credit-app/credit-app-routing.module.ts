import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditAppComponent } from './credit-app.component';

const routes: Routes = [
  {
    path: "",
    component: CreditAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditAppRoutingModule { }
