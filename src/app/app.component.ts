import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang = 'en';

  onLangChange(lang){
    this.currentLang = lang
  }

  public isCultureSelected(culture) {
    return culture === this.currentLang;
  }
}
