import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../../shared/services/data.service'


@Component({
  selector: 'app-dcf-property',
  templateUrl: './dcf-property.component.html',
  styleUrls: ['./dcf-property.component.scss']
})
export class DcfPropertyComponent implements OnInit {

  constructor(private ds : DataService) { }

  ngOnInit(): void {
    //this.ds.dcfTabIdSubject.next('tab1')
  }
  onTabChange(event) {
    this.ds.dcfTabIdSubject.next(event.nextId)
  }
}
