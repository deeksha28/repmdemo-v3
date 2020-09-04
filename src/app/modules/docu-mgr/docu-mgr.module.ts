import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocuMgrRoutingModule } from './docu-mgr-routing.module';
import { DocuMgrComponent } from './docu-mgr.component';


@NgModule({
  declarations: [DocuMgrComponent],
  imports: [
    CommonModule,
    DocuMgrRoutingModule
  ]
})
export class DocuMgrModule { }
