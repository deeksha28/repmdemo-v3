import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ITAB } from '../../itab';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  viewSubject = new BehaviorSubject<string>(null);
  view = this.viewSubject.asObservable();
  headerSubject = new BehaviorSubject<string>(null);
  header = this.headerSubject.asObservable();
  headerTypeSubject = new BehaviorSubject<string>(null);
  headerType = this.headerTypeSubject.asObservable();
  portfolioToggleSubject = new BehaviorSubject<boolean>(false);
  portfolioToggle = this.portfolioToggleSubject.asObservable();
  tabValueSubject = new BehaviorSubject<ITAB>(null);
  tabValue = this.tabValueSubject.asObservable();
  portalSubject = new BehaviorSubject<boolean>(true);
  portal = this.portalSubject.asObservable();
    
  dcfTabIdSubject = new BehaviorSubject<string>(null);
  dcfTabIdValue = this.dcfTabIdSubject.asObservable();

  selectedViewSubject = new BehaviorSubject<string>(null);
  selectedView = this.selectedViewSubject.asObservable();

  selectedViewLevelSubject = new BehaviorSubject<string>(null);
  selectedViewLevel = this.selectedViewLevelSubject.asObservable();

  public portfolioId = 0;
  public propertyId = 0;

  portfolios = [
    "BGV Portfolio",
    "Offered Portfolio"
  ]
  bgvPortfolio = [
    {'id': '6503','status': '1','name': '-Kurzelängeweg 24/24a,4123 Allschwil', 'category' : '2','canton':'1','zipTown':'5'},
    {'id': '6509','status': '1','name': '-Hauptstrasse 125 / 129 und Amerikanerstrasse 22 / 26,4102 Binningen','category' : '1','canton':'0','zipTown':'1'},
    {'id': '6512','status': '1','name': '-Neumattstrasse 44/46,4103 Bottmingen','category' : '2','canton':'1','zipTown':'2'},
    {'id': '6518','status': '1','name': '-Flühbergweg 2/2a/2b,4107 Ettingen', 'category' : '2','canton':'1','zipTown':'4'},
    {'id': '6521','status': '1','name': '-Ringstrasse 9,4414 Füllinsdorf', 'category' : '2','canton':'1','zipTown':'12'},
    {'id': '6530','status': '1','name': '-Arisdörferstrasse/Sonnmattweg,4410 Liestal', 'category' : '2','canton':'1','zipTown':'11'},
    {'id': '6536','status': '1','name': '-Kesselweg 45,47,47a,47b,4410 Liestal', 'category' : '2','canton':'1','zipTown':'11'},
    {'id': '6548','status': '1','name': '-Rheinstrasse 33b,4410 Liestal', 'category' : '1','canton':'1','zipTown':'11'},
    {'id': '6551','status': '1','name': '-Überbauung Im Rosen,4410 Liestal', 'category' : '2','canton':'1','zipTown':'11'},
    {'id': '6552','status': '1','name': '-Rosenstrasse 37b,4410 Liestal', 'category' : '2','canton':'1','zipTown':'11'},
    {'id': '6554','status': '1','name': '-Lehengasse 8,4142 Münchenstein', 'category' : '2','canton':'1','zipTown':'7'},
  ]
 
  offeredPortfolio = [
    {'id': '9002','status': '1','name': '-Hellmühlestrasse 9,8580 Amriswil', 'category' : '2','canton':'1','zipTown':'12'},
    {'id': '9003','status': '1','name': '-Feldwiesenstrasse 10/12,9606 Bütschwil','category' : '2','canton':'1','zipTown':'14'},
    {'id': '9005','status': '1','name': '-Oberdorfstrasse ,4443 Wittinsburg','category' : '2','canton':'1','zipTown':'5'},
    {'id': '9006','status': '1','name': '-Hauptstrasse 61 und 59,4441 Thürnen', 'category' : '2','canton':'1','zipTown':'4'},
    {'id': '9007','status': '1','name': '-noch offen ,5620 Bremgarten AG', 'category' : '2','canton':'1','zipTown':'9'},
    {'id': '9008','status': '1','name': '-Traugott Meyer-Str. 7 / 7a / 9 / 11 / 13 /15 / 17,4147 Aesch' , 'category' : '2','canton':'1','zipTown':'3'},
    {'id': '9009','status': '1','name': '-Keine ,9000 St. Gallen', 'category' : '2','canton':'1','zipTown':'13'},
    {'id': '9013','status': '1','name': '-Traugott Meyer Strasse 19,4147 Aesch', 'category' : '2','canton':'1','zipTown':'3'},
    {'id': '9014','status': '1','name': '-Seftigenstrasse 259,3084 Wabern', 'category' : '1','canton':'1','zipTown':'2'},
    {'id': '9017','status': '1','name': '-Eggweg 13/13a,3065 Bolligen', 'category' : '1','canton':'1','zipTown':'1'},
  ]

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
  // setDcfTabId(dcfTabId){
  //   this.dcfTabId = dcfTabId;
  // }
  // getDcfTabId(){
  //   return this.dcfTabId
  // }
}
