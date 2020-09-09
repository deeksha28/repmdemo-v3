import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  view;
  constructor(private ds: DataService, router:Router) { }

  ngOnInit(): void {
    // this.view = "portfolio"
    
  }

  onChange(newValue) {
    // this.ds.viewSubject.next(this.view)
  }

}
