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
    if (!this.bellNotificationService.isImporting) {
      this.bellNotificationService.isImporting=true
    }else{
      this.bellNotificationService.isImporting = false;

    }

  }
}
