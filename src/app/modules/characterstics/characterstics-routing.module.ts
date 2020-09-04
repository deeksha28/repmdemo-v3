import { CharactersticsComponent } from './characterstics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersticsModule } from './characterstics.module';

const routes: Routes = [
  {
    path: "",
    component: CharactersticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersticsRoutingModule { }
