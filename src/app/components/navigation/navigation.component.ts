import { Component, OnInit, Input } from '@angular/core';
import { SVGKEYS } from 'src/app/shared/components/interfaces/shared.interface';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() showLabels: boolean;
  overviewKey = SVGKEYS.OVERVIEW;
  qccapexKey = SVGKEYS.QCCAPEX;
  proftitnlossKey = SVGKEYS.PROFITNLOSS;
  hedonicKey = SVGKEYS.HEDONIC;
  documanagerKey = SVGKEYS.DOCUMANAGER;
  dcfKey = SVGKEYS.DCF;
  ratingKey = SVGKEYS.RATING;
  creditApplicationKey = SVGKEYS.CREDITAPPLICATION;
  hkBkKey = SVGKEYS.HKBK;
  dashboardKey = SVGKEYS.DASHBOARD;
  importDataKey = SVGKEYS.IMPORTDATA;
  clonePropertyKey = SVGKEYS.CLONEPROPERTY;
  masterdataKey = SVGKEYS.MASTERDATA;
  rentermirrorKey = SVGKEYS.RENTERMIRROR;
  budgetKey = SVGKEYS.BUDGET;
  processstepperKey = SVGKEYS.PROCESSSTEPPER;
  mapKey = SVGKEYS.MAP;
  public svgHeight = 35;
  selectedView;
  view;
  viewPortfolio;
  public svgFillColorArr = [
    '#ff9800',
    '#7e57c2',
    '#26a69a',
    '#00bcd4',
    '#4caf50',
    '#e57373',
    '#ab47bc',
    '#3f51b5',
    '#ff7043',
    '#ff7043',
    '#673ab7',
    '#795548',
    '#f06292',
    '#9e9d24',
    '#005684',
    '#0097a7',
    '#c0ca33',
    '#5c6bc0',
    '#fbc02d'
  ];
  
  constructor(private router: Router, private ds: DataService) { 
    this.selectedView = "overview"
    this.ds.view.subscribe((value) => {
      this.view = value
    })

    this.ds.portfolioToggle.subscribe((value) => {
      this.viewPortfolio = value
    })
    this.view = "portfolio"
  }

  ngOnInit(): void {
  }

  public navigate(selectedView: string, level: string, path: string) {
    this.selectedView = selectedView
    if(this.selectedView != 'portfolio')
      this.router.navigate([path])
    else{
      this.ds.headerTypeSubject.next('portfolio')
      this.ds.portfolioToggleSubject.next(!this.ds.portfolioToggleSubject.getValue())
    }      
    // this.path = path;
    // this.selectedView_temp = selectedView;
    // if (level === 'portfolio') {
    //   this.path = path + this.portfolioId;
    // } else if (level === 'property') {
    //   this.path = path + this.propertyId;
    // }

    // if (this.unitService.getNavigateConfirmation()) {
    //   this.selectedView = selectedView;
    //   this.unitService.setSelectedView(selectedView);
    //   this.router.navigate([this.path]);
    // } else {
    //   this.toggleConfirmModal = true;
    // }
  }
  public selectView(selectedView) {
    // if (selectedView === 'dashboard') {
    //   this.unitService.getQlikSenseURL();
    //   // this.navigate('immo-cockpit', 'portfolio', 'layout/immo-cockpit/iframe/portfolio/');
    // } else if (selectedView === 'map') {
    //   let address = ''; // sessionStorage.getItem('propertyAddress');
    //   const fulladdress: string = sessionStorage.getItem('address');
    //   const splitAddress: string[] = fulladdress.split('|');

    //   if (splitAddress && splitAddress.length > 0) {
    //     const zip = splitAddress[0];
    //     const town = splitAddress[1];
    //     const street = splitAddress[2] && splitAddress[2] !== '' ? splitAddress[2] + ', ' : '';
    //     address = street + zip + ' ' + town;
    //   }

    //   const lat = sessionStorage.getItem('lat');
    //   const lon = sessionStorage.getItem('lon');

    //   if (lat === '0') {
    //     this.validateAddressAndSave(address);
    //     return;
    //   }
    //   window.open(Config.API_MAP_URL + 'address=' + address + '&lat=' + lat + '&lon=' + lon, '_blank');
    // } else {
    //   this.unitService.setSelectedView(selectedView);
    // }
  }
}
