import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  viewSubject = new BehaviorSubject<string>("portfolio");
  view = this.viewSubject.asObservable();
  headerSubject = new BehaviorSubject<string>("Portfolio1");
  header = this.headerSubject.asObservable();
  headerTypeSubject = new BehaviorSubject<string>("portfolio");
  headerType = this.headerTypeSubject.asObservable();
  constructor() { }
}
