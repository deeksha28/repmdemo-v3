import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() showPortfolio: boolean;
  portfolio;
  public showLabels = true;
  public showLess = true;
  zipTown = 0;
  canton = 0;
  category = 0;
  selectedRowId = 0;
  properties : any;
  filteredProperties : object;
  portfolios = [
    "BGV Portfolio",
    "Offered Portfolio"
  ]
  bgvPortfolio = [
    {'id': '6503','name': '-Kurzelängeweg 24/24a,4123 Allschwil', 'category' : '1'},
    {'id': '6506','name': '-Oberwilerstrasse 7,4102 Binningen','category' : '1'},
    {'id': '6509','name': '-Hauptstrasse 125 / 129 und Amerikanerstrasse 22 / 26,4102 Binningen','category' : '2'},
    {'id': '6512','name': '-Neumattstrasse 44/46,4103 Bottmingen'},
    {'id': '6518','name': '-Flühbergweg 2/2a/2b,4107 Ettingen'},
    {'id': '6519','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6520','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6521','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6522','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6523','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
  ]
  offeredPortfolio = [
    {'id': '6503','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6506','name': '-Oberwilerstrasse 7,4102 Binningen'},
    {'id': '6512','name': '-Neumattstrasse 44/46,4103 Bottmingen'},
    {'id': '6518','name': '-Flühbergweg 2/2a/2b,4107 Ettingen'},
    {'id': '6519','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6520','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6521','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6522','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6523','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
    {'id': '6524','name': '-Kurzelängeweg 24/24a,4123 Allschwil'},
  ]
  constructor(private ds: DataService) {     
  }

  ngOnInit(): void {
    this.portfolio = 'portfolio1'
    this.properties = this.bgvPortfolio;
    this.ds.headerSubject.next(this.portfolios[0])
    this.assignCopy();
  }

  onChange(event) {
    this.ds.headerTypeSubject.next('portfolio')
    this.ds.headerSubject.next(this.portfolio)
  }

  selectProperty(type, name){
    this.ds.headerTypeSubject.next(type)
    this.ds.headerSubject.next(name)
  }

  toggleViewLabels() {
    this.showLabels = !this.showLabels;
  }
  toggleShowLess() {
    this.showLess = !this.showLess;
  }
  selectPortfolio(event){
    if(event.target.value == 1)
      this.properties = this.offeredPortfolio;
    else
      this.properties  = this.bgvPortfolio;
    
    this.ds.headerTypeSubject.next('portfolio')
    this.ds.headerSubject.next(this.portfolios[event.target.value])
  }
  selectProp(id, name){
    this.selectedRowId = id;
    this.ds.headerTypeSubject.next('property')
    this.ds.headerSubject.next(id + name)
  }

  assignCopy(){
    this.filteredProperties = Object.assign([], this.properties);
 }
 filterItem(value){
   console.log(this.properties)
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    if(this.category == 1 || this.category == 2){
      this.properties.filter(
        item => item.name.toLowerCase().indexOf(this.category) > -1
      )
    } 
  }
}
