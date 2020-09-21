import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BellNotificationService {
  isImporting = false;
  isImported = false
  importFileSubject = new BehaviorSubject<boolean>(false);
  importFile = this.importFileSubject.asObservable();
  statusSubject = new BehaviorSubject<any>([]);
  status = this.statusSubject.asObservable();

  constructor(private http: HttpClient) { }




  importData(seconds) {
    this.isImporting = true;
    this.isImported = false;
    this.importFileSubject.next(false)
    this.statusSubject.next(null);
    this.statusSubject.next(["Import Started"]);
    this.http.post('http://localhost:47000/v1/importDataFromFiles?mmapId=' + seconds, {})
      .subscribe(data => {
        if (data) {
          this.importFileSubject.next(true);
        }
      })

    this.getStatus()
    let putStatus = setInterval(() => {
      this.getStatus()

    }, 2000);
    this.importFile.subscribe((value) => {
      if (value) {
        this.statusSubject.next(
          this.statusSubject.getValue().concat("Import Completed")
        );
        this.isImported = true
        clearInterval(putStatus);
      }
    });
  }

  getStatus() {
    this.http.get('http://localhost:47000/v1/getImportStatus')
      .subscribe(data => {
        if (data) {
          this.statusSubject.next(
            this.statusSubject.getValue().concat(data)
          );
        }
      })
  }
}