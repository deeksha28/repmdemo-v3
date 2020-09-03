import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  view;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.view = "portfolio"
  }

  onChange(newValue) {
    this.ds.viewSubject.next(this.view)
  }

}
