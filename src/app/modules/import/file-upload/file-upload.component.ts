import { BellNotificationService } from './../bell-notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
})
export class FileUploadComponent implements OnInit {
  constructor(private bellNotificationService:BellNotificationService) {}

  ngOnInit(): void {}

  toggleBellIcon(){

    this.bellNotificationService.importData(30000)
    //   this.bellNotificationService.isImporting=true
    // if (!this.bellNotificationService.isImporting) {
    // }else{
    //   this.bellNotificationService.isImporting = false;

    // }

  }
}
