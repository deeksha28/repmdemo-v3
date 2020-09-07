import { Component } from '@angular/core';
import { SVGKEYS } from './shared/components/interfaces/shared.interface';
import { Router } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { TabService } from './tab.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  overviewKey = SVGKEYS.OVERVIEW;
  public svgHeight = 25;
  public svgFillColor = '#ffffff';
  currentLang = 'en';

  constructor(private router: Router, private ds: DataService,private tabService: TabService) { 
    // this.selectedView = "overview"
  }

  onLangChange(lang){
    this.currentLang = lang
  }
  public navigate(selectedView: string, level: string, path: string) {   
    // this.selectedView = selectedView;
    this.tabService.addTab(path);
    this.router.navigate([path]);
  }


  public isCultureSelected(culture) {
    return culture === this.currentLang;
  }
}
