import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ImportRoutingModule } from "./import-routing.module";
import { ImportComponent } from "./import.component";
import { MappingComponent } from "./mapping/mapping.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { MappingCardsComponent } from "./mapping-cards/mapping-cards.component";
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [ImportComponent, MappingComponent, MappingCardsComponent, FileUploadComponent],
  imports: [
    CommonModule,
    ImportRoutingModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
  ],
})
export class ImportModule {}
