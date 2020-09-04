import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  viewSubject = new BehaviorSubject<string>("portfolio");
  view = this.viewSubject.asObservable();
  headerSubject = new BehaviorSubject<string>(null);
  header = this.headerSubject.asObservable();
  headerTypeSubject = new BehaviorSubject<string>(null);
  headerType = this.headerTypeSubject.asObservable();
  portfolioToggleSubject = new BehaviorSubject<boolean>(false);
  portfolioToggle = this.portfolioToggleSubject.asObservable();
  constructor() { }
}
