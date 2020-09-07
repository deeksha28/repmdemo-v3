import { Injectable } from '@angular/core';
import { ITAB } from './itab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITAB[] = [];
  activeUrl;
  tabOptions: ITAB[] = [
    { name: 'overview', url: '/overview' , id: 0 }, 
    { name: 'constructionPlanning', url: '/constructionPlanning' , id: 0 }, 
    { name: 'profitAndLoss', url: '/profitAndLoss' , id: 0 }, 
    { name: 'qualicasa', url: '/qualicasa' , id: 0 }, 
    { name: 'tasks',   url: '/tasks' , id: 0},
    { name: 'DCF',   url: '/dcf', id: 0}
  ];
 
  constructor() { }

  addTab(url: string) {
    const tab = this.getTabOptionByUrl(url);
    if (!this.tabs.includes(tab)) {
      this.tabs.push(tab);
      this.activeUrl = tab.url + '/' + tab.id
    }
    else if (this.tabs.includes(tab)){
      var duplicateTabs = this.tabs.filter(tab => tab.url == tab.url)
      console.log(duplicateTabs.length)
      var tabCopy = {...tab};
      tabCopy.id = tab.id + duplicateTabs.length;
      this.tabs.push(tabCopy);
      this.activeUrl = tabCopy.url + '/' + tabCopy.id
    }
  }
   
  getTabOptionByUrl(url: string): ITAB {
    return this.tabOptions.find(tab => tab.url === url);
  }
  
  getActiveUrl(){
    return this.activeUrl;
  }
  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }
}



