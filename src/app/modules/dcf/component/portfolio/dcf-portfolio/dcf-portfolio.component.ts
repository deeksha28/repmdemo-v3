import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../../../../../shared/services/data.service'

@Component({
  selector: 'app-dcf-portfolio',
  templateUrl: './dcf-portfolio.component.html',
  styleUrls: ['./dcf-portfolio.component.scss']
})
export class DcfPortfolioComponent implements OnInit {

  constructor(private ds : DataService) { }

  ngOnInit(): void {
  }

  onTabChange(event) {
    this.ds.dcfTabIdSubject.next(event.nextId)
  }

}
