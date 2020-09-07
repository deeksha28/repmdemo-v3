import { Component } from '@angular/core';
import { SVGKEYS } from './shared/components/interfaces/shared.interface';

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

  onLangChange(lang){
    this.currentLang = lang
  }

  public isCultureSelected(culture) {
    return culture === this.currentLang;
  }
}
