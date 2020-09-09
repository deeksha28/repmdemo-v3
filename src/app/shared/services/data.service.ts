import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ITAB } from '../../itab';

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
  tabValueSubject = new BehaviorSubject<ITAB>(null);
  tabValue = this.tabValueSubject.asObservable();
  public portfolioId = 0;
  public propertyId = 0;

  constructor() { }


  setPortfolioId(portfolioId){
    this.portfolioId = portfolioId;
  }
  getPortfolioId(){
    return this.portfolioId
  }
  setPropertyId(propertyId){
    this.propertyId = propertyId;
  }
  getPropertyId(){
    return this.propertyId;
  }
}
