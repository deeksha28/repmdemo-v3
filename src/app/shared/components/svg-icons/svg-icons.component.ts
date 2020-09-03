import { Component, OnInit, Input } from '@angular/core';
import { SVGKEYS } from "../interfaces/shared.interface";

@Component({
  selector: 'app-svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.scss']
})
export class SvgIconsComponent implements OnInit {
  @Input() key: SVGKEYS;
  @Input() height: number;
  @Input() fillColor: string;

  // svg keys
  dashboardKey = SVGKEYS.DASHBOARD;
  dcfKey = SVGKEYS.DCF;
  housesKey = SVGKEYS.HOUSES;
  masterdataKey = SVGKEYS.MASTERDATA;
  overviewKey = SVGKEYS.OVERVIEW;
  proftitnlossKey = SVGKEYS.PROFITNLOSS;
  qccapexKey = SVGKEYS.QCCAPEX;
  rentermirrorKey = SVGKEYS.RENTERMIRROR;
  mapKey = SVGKEYS.MAP;
  previousKey = SVGKEYS.PREVIOUS;
  nextKey = SVGKEYS.NEXT;
  repm5LogoKey = SVGKEYS.REPM5LOGO;
  documanagerKey = SVGKEYS.DOCUMANAGER;
  processstepperKey = SVGKEYS.PROCESSSTEPPER;
  clonePropertyKey = SVGKEYS.CLONEPROPERTY;
  reportKey = SVGKEYS.REPORT;
  micromacroKey = SVGKEYS.MICROMACRO;
  saveImportKey = SVGKEYS.SAVEIMPORT;
  previewFileKey = SVGKEYS.PREVIEWFILE;
  detailViewKey = SVGKEYS.DETAILVIEW;
  importFileKey = SVGKEYS.IMPORTFILE;
  importStatusKey = SVGKEYS.IMPORTSTATUS;
  importDataKey = SVGKEYS.IMPORTDATA;
  companyKey = SVGKEYS.COMPANY;
  budgetKey = SVGKEYS.BUDGET;
  ratingKey = SVGKEYS.RATING;
  creditApplicationKey = SVGKEYS.CREDITAPPLICATION;
  hkBkKey = SVGKEYS.HKBK;
  hedonicKey = SVGKEYS.HEDONIC;

  constructor() { }

  ngOnInit(): void {
  }

}
