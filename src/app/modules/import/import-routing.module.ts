import { ImportComponent } from './import.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingComponent } from './mapping/mapping.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path: "",
    component: ImportComponent,
    children: [
      { path: 'portfolio/:id', component: MappingComponent },
      { path: 'portfolio/:id/upload', component: FileUploadComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
