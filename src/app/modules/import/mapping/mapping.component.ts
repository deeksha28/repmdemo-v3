import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {
  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewLogs(event) {
    this.hide = true;
  }

}
