import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public showLabels = false;
  public showPortfolio = false;
  viewPortfolio: boolean = false
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.portfolioToggle.subscribe((value) => {
      this.viewPortfolio = value
    })
  }

  toggleViewLabels() {
    this.showLabels = !this.showLabels;
  }

  toggleViewPortfolio() {
    this.showPortfolio = !this.showPortfolio;
  }

}
