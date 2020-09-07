import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { TabService } from '../../tab.service';
import { Router, NavigationEnd   } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public showLabels = true;
  public showPortfolio = false;
  viewPortfolio: boolean = false
  tabs = [];
 

  constructor(private ds: DataService,public tabService: TabService, private router : Router) { }

  ngOnInit(): void {
    this.ds.portfolioToggle.subscribe((value) => {
      this.viewPortfolio = value
    })
    this.tabs = this.tabService.tabs;
  }

  toggleViewLabels() {
   /*  this.showLabels = !this.showLabels; */
  }

  toggleViewPortfolio() {
    this.showPortfolio = !this.showPortfolio;
  }
  closeTab(index: number, event: Event) {
    this.tabService.deleteTab(index);
    event.preventDefault();
  }
  onTabChange(event) {
    this.router.navigateByUrl(event.nextId);
  }
}
