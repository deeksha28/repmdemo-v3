import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BellNotificationService {
  isImporting = false;
  isImported =false
  constructor() {}
  importFileSubject = new BehaviorSubject<boolean>(false);
  importFile = this.importFileSubject.asObservable();
  statusSubject = new BehaviorSubject<any>([]);
  status = this.statusSubject.asObservable();


  importData(seconds) {
    this.statusSubject.next([]);
    this.isImporting = true;
    this.isImported = false;
    this.statusSubject.next(["Import Started", new Date().toLocaleString()]);
    setTimeout(() => {
      this.importFileSubject.next(true);
    }, seconds);
    let putStatus = setInterval(() => {
      this.statusSubject.next(
        this.statusSubject.getValue().concat(new Date().toLocaleString())
      );
    }, 2000);
    this.importFile.subscribe((value) => {
      if (value) {
         this.statusSubject.next(
           this.statusSubject.getValue().concat("Import Completed")
         );
         this.isImported= true
        clearInterval(putStatus);
      }
    });
  }
}
