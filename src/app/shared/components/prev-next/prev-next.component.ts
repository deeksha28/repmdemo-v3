import { Component, OnInit } from '@angular/core';
import { SVGKEYS } from '../interfaces/shared.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-prev-next',
  templateUrl: './prev-next.component.html',
  styleUrls: ['./prev-next.component.scss']
})
export class PrevNextComponent implements OnInit {
  public previousKey = SVGKEYS.PREVIOUS;
  public nextKey = SVGKEYS.NEXT;
  public svgHeight = 14;
  public svgFillColor = '#fff'; // '#005684';
  public header: string;

  constructor(private ds: DataService) {
    this.ds.header.subscribe((value) => {
      this.header = value
    })
  }

  ngOnInit(): void {
  }

  public navigate(action) {
    
  }

  showPrevNext() {
    return this.ds.headerTypeSubject.getValue() == 'property';
}

}
