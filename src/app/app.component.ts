import { Component } from '@angular/core';
import { SVGKEYS } from './shared/components/interfaces/shared.interface';
import { Router } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { TabService } from './tab.service';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public redirectURL = environment.redirectingURL;
  overviewKey = SVGKEYS.OVERVIEW;
  public svgHeight = 25;
  public svgFillColor = '#ffffff';
  currentLang = 'en';
  public activeTab;
  public activeTabCopy;

  constructor(private router: Router, private ds: DataService, private tabService: TabService) { 
    // this.selectedView = "overview"
    this.ds.tabValue.subscribe((value) => {
      this.activeTab = value
      this.activeTabCopy = {...this.activeTab};
      this.ds.dcfTabIdValue.subscribe((value)=>{
        if(value)
        {
          if(this.activeTabCopy!=null && this.activeTabCopy.name=="DCF"){
            if(this.activeTabCopy.path.includes('portfolio'))
              this.activeTabCopy.actionBtn = this.tabService.dcfPortfolioBtnPermissions[value];
            else if(this.activeTabCopy.path.includes('property'))
              this.activeTabCopy.actionBtn = this.tabService.dcfPropertyBtnPermissions[value]
          }
        }
       });
    });
  }

  onLangChange(lang){
    this.currentLang = lang
  }
  public navigate(selectedView: string, level: string, path: string) {   
    // this.selectedView = selectedView;
    this.ds.tabValueSubject.next(this.tabService.getTabOptionByPath(path))
    this.tabService.addTab(path);
    this.router.navigate([path]);
  }


  public isCultureSelected(culture) {
    return culture === this.currentLang;
  }

  public action() {
  }
}
