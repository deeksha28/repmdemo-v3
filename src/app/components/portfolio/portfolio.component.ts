import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

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
  selectedPortfolioId = 0;
  properties : any;
  selectedView;
  filteredProperties : any;

  portfolios = [
    "BGV Portfolio",
    "Offered Portfolio"
  ]
  selectedPortfolio = "BGV Portfolio"
  bgvPortfolio = [
    {'id': '6503','name': '-Kurzelängeweg 24/24a,4123 Allschwil', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6509','name': '-Hauptstrasse 125 / 129 und Amerikanerstrasse 22 / 26,4102 Binningen','category' : '1','canton':'0','zipTown':'1'},
    {'id': '6512','name': '-Neumattstrasse 44/46,4103 Bottmingen','category' : '2','canton':'1','zipTown':'1'},
    {'id': '6518','name': '-Flühbergweg 2/2a/2b,4107 Ettingen', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6521','name': '-Ringstrasse 9,4414 Füllinsdorf', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6530','name': '-Arisdörferstrasse/Sonnmattweg,4410 Liestal', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6536','name': '-Kesselweg 45,47,47a,47b,4410 Liestal', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6548','name': '-Rheinstrasse 33b,4410 Liestal', 'category' : '1','canton':'1','zipTown':'11'},
    {'id': '6551','name': '-Überbauung Im Rosen,4410 Liestal', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6552','name': '-Rosenstrasse 37b,4410 Liestal', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '6554','name': '-Lehengasse 8,4142 Münchenstein', 'category' : '2','canton':'1','zipTown':'1'},
  ]
 
  offeredPortfolio = [
    {'id': '9002','name': '-Hellmühlestrasse 9,8580 Amriswil', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '9003','name': '-Feldwiesenstrasse 10/12,9606 Bütschwil','category' : '2','canton':'1','zipTown':'1'},
    {'id': '9005','name': '-Oberdorfstrasse ,4443 Wittinsburg','category' : '2','canton':'1','zipTown':'1'},
    {'id': '9006','name': '-Hauptstrasse 61 und 59,4441 Thürnen', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '9007','name': '-noch offen ,5620 Bremgarten AG', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '9008','name': '-Keine ,9000 St. Gallen', 'category' : '1','canton':'1','zipTown':'1'},
    {'id': '9012','name': '-Kirchbergstrasse 20,8207 Schaffhausen', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '9013','name': '-Traugott Meyer Strasse 19,4147 Aesch', 'category' : '2','canton':'1','zipTown':'1'},
    {'id': '9014','name': '-Seftigenstrasse 259,3084 Wabern', 'category' : '1','canton':'1','zipTown':'1'},
    {'id': '9017','name': '-Eggweg 13/13a,3065 Bolligen', 'category' : '1','canton':'1','zipTown':'1'},
  ]
  constructor(private router: Router,private ds: DataService) {     
  }

  ngOnInit(): void {
    this.ds.header.subscribe((value) => {
      if(value)
        this.selectedRowId = isNaN(parseInt(value.split('-')[0]))?0:parseInt(value.split('-')[0]);

           
      if(!(this.ds.headerTypeSubject.value == 'property')){
        this.ds.headerTypeSubject.next('portfolio')
        this.ds.viewSubject.next('portfolio')
        // this.ds.headerSubject.next(this.portfolios[0])        
      }    
    })
    if(this.ds.getPortfolioId() != 1)
      this.properties = this.bgvPortfolio;
    else {
      this.properties = this.offeredPortfolio;
      this.selectedPortfolioId = this.ds.getPortfolioId();
    }
      
    this.assignCopy();
  }

  ngAfterViewChecked(): void{
    if(document.getElementById('propertyTree')){
      var logoElementWidth = document.getElementById('mainSiteHeader')?document.getElementById('mainSiteHeader').children[0].clientWidth:0
      var topElementHeight = document.getElementsByClassName('container')[0]?document.getElementsByClassName('container')[0].clientHeight + 2:0;
      var treeWidth = document.getElementById('propertyTree').offsetWidth;
      var propertyLabelWidth = document.getElementById('mainSiteHeader')?document.getElementById('mainSiteHeader').children[1].children[0].scrollWidth:0
      document.getElementById('propertyTree').style.left = (logoElementWidth + propertyLabelWidth) - document.getElementsByClassName('topbar-label')[0].scrollWidth + 'px';
      document.getElementById('propertyTree').style.top = (topElementHeight) + 'px';
    }
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
    this.ds.setPortfolioId(event.target.value)
    this.ds.headerTypeSubject.next('portfolio')
    this.ds.viewSubject.next('portfolio')
    this.ds.headerSubject.next(this.portfolios[event.target.value])
    
    this.selectedPortfolio = event.target.options[event.target.options.selectedIndex].text
    this.assignCopy();
  }

  selectProp(id, name){
    this.selectedRowId = id;
    this.ds.setPropertyId(id)
    this.ds.headerTypeSubject.next('property')
    this.ds.portfolioToggleSubject.next(!this.ds.portfolioToggleSubject.getValue())
    this.ds.viewSubject.next('property')
    this.ds.headerSubject.next(id + name)
  }

  assignCopy(){
    this.filteredProperties = Object.assign([], this.properties);
  }

  filterItem(value){
    var isFiltered = false;
    if(this.category == 1 || this.category == 2){
      this.filteredProperties = Object.assign([], this.properties).filter(
        item => item.category.indexOf(this.category) > -1
      )
      isFiltered = true;
    }
    if(parseInt(this.canton.toString().split(":")[0]) > 0){
      this.filteredProperties = Object.assign([], this.filteredProperties).filter(
        item => item.canton == this.canton.toString().split(":")[0]
      )
      isFiltered = true;
    }
    if(parseInt(this.zipTown.toString().split(":")[0]) > 0){
      this.filteredProperties = Object.assign([], this.filteredProperties).filter(
        item => item.zipTown == this.zipTown.toString().split(":")[0]
      )
      isFiltered = true;
    } 
    else if(!isFiltered)
      this.assignCopy();
  }
  public navigate(selectedView: string, level: string, path: string) {   
      this.ds.portfolioToggleSubject.next(!this.ds.portfolioToggleSubject.getValue())
  }
}
