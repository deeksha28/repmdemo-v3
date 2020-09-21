import { Component, OnInit } from '@angular/core';
import { SVGKEYS } from './shared/components/interfaces/shared.interface';
import { Router } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { TabService } from './tab.service';
import { environment } from "../environments/environment";
import { BellNotificationService } from './modules/import/bell-notification.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public redirectURL = environment.redirectingURL;
  overviewKey = SVGKEYS.OVERVIEW;
  public svgHeight = 25;
  public svgFillColor = "#ffffff";
  currentLang = "en";
  public activeTab;
  public activeTabCopy;
  statusMessage =[]
  portal;
  constructor(
    private router: Router,
    private ds: DataService,
    private tabService: TabService,
    public bellNotificationService: BellNotificationService
  ) {
    // this.selectedView = "overview"
    this.ds.tabValue.subscribe((value) => {
      this.activeTab = value;
      this.activeTabCopy = { ...this.activeTab };
      this.ds.dcfTabIdValue.subscribe((value) => {
        if (value) {
          if (this.activeTabCopy != null && this.activeTabCopy.name == "DCF") {
            if (this.activeTabCopy.path.includes("portfolio"))
              this.activeTabCopy.actionBtn = this.tabService.dcfPortfolioBtnPermissions[
                value
              ];
            else if (this.activeTabCopy.path.includes("property"))
              this.activeTabCopy.actionBtn = this.tabService.dcfPropertyBtnPermissions[
                value
              ];
          }
        }
      });
    });
    this.ds.portal.subscribe((value) => {
      this.portal = value;
    });
  }

  ngOnInit(): void {
    this.bellNotificationService.status.subscribe(value=>{
      this.statusMessage=value
    })
  }

  onLangChange(lang) {
    this.currentLang = lang;
  }
  public navigate(selectedView: string, level: string, path: string) {
    if (selectedView == "overview" || selectedView == "tasks")
      this.tabService.setActiveUrl(path);
    this.ds.tabValueSubject.next(this.tabService.getTabOptionByPath(path));
    this.tabService.addTab(path);
    this.router.navigate([path]);
  }

  public isCultureSelected(culture) {
    return culture === this.currentLang;
  }

  public action() {}
}
