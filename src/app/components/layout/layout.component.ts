import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public showLabels = false;
  public showPortfolio = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleViewLabels() {
    this.showLabels = !this.showLabels;
  }

  toggleViewPortfolio() {
    this.showPortfolio = !this.showPortfolio;
  }

}
