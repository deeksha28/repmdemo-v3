import { Component, OnInit } from "@angular/core";
import { PageChangedEvent } from "ngx-bootstrap/pagination";
import { Router } from "@angular/router";

@Component({
  selector: "app-mapping-cards",
  templateUrl: "./mapping-cards.component.html",
  styleUrls: ["./mapping-cards.component.scss"],
})
export class MappingCardsComponent implements OnInit {
  color = {
    red: "6px solid red",
    green: "6px solid green",
  };
  returnedArray;

  mappings = [
    {
      name: "Mapping 1",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      name: "Mapping 2",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      name: "Mapping 3",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      name: "Mapping 4",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      name: "Mapping 5",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      name: "Mapping 6",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      name: "Mapping 7",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      name: "Mapping 8",
      lastImport: "01 Sept 2020",
      recInserted: 10,
      recModified: 5,
      nextImport: "01 Nov 2020",
      color: this.color.green,
    },
    {
      name: "Mapping 9",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      name: "Mapping 10",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.red,
    },
    {
      name: "Mapping 11",
      lastImport: "10 Aug 2020",
      recInserted: 6,
      recModified: 0,
      nextImport: "22 Dec 2020",
      color: this.color.green,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.mappings.slice(startItem, endItem);
  }

  navigateTo() {
    this.router.navigate(["/importdata/portfolio/0/upload"]);
  }
}
