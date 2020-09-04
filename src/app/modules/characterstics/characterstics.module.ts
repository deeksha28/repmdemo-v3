import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersticsRoutingModule } from './characterstics-routing.module';
import { CharactersticsComponent } from './characterstics.component';


@NgModule({
  declarations: [CharactersticsComponent],
  imports: [
    CommonModule,
    CharactersticsRoutingModule
  ]
})
export class CharactersticsModule { }
