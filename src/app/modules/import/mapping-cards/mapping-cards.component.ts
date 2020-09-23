import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PageChangedEvent } from "ngx-bootstrap/pagination";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-mapping-cards",
  templateUrl: "./mapping-cards.component.html",
  styleUrls: ["./mapping-cards.component.scss"],
})
export class MappingCardsComponent implements OnInit {
  @Output() public onViewLogs = new EventEmitter<any>();
  color = {
    red: "6px solid red",
    green: "6px solid green",
  };
  returnedArray;

  mappings = [
    {
      id: 1,
      name: "Mapping 1",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      id: 2,
      name: "Mapping 2",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      id: 3,
      name: "Mapping 3",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      id: 4,
      name: "Mapping 4",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      id: 5,
      name: "Mapping 5",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      id: 6,
      name: "Mapping 6",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      id: 7,
      name: "Mapping 7",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      id: 8,
      name: "Mapping 8",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      id: 9,
      name: "Mapping 9",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      id: 10,
      name: "Mapping 10",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      id: 11,
      name: "Mapping 11",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.green,
    },
  ];

  mappingResult = [];
  first = 0;
  limit = 9;

  constructor(private router: Router, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.mappingResult = this.mappings.slice(this.first, this.first+this.limit)
  }

  pageChanged(event: PageChangedEvent): void {
    console.log("event : ", event)
    const startItem = (event.page - 1) * this.limit;
    const endItem = event.page * this.limit;
    this.mappingResult = this.mappings.slice(startItem, endItem);
  }

  navigateTo(id) {
    let url = this.activatedRoute.snapshot['_routerState'].url;
    this.router.navigate([url+"/upload/"+id]);
  }

  viewLog(id) {
    this.onViewLogs.emit(id);
  }
}
