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
  constructor(private ds: DataService) {     
  }

  ngOnInit(): void {
    this.portfolio = 'portfolio1'
  }

  onChange(event) {
    this.ds.headerTypeSubject.next('portfolio')
    this.ds.headerSubject.next(this.portfolio)
  }

  selectProperty(type, name){
    this.ds.headerTypeSubject.next(type)
    this.ds.headerSubject.next(name)
  }
}
