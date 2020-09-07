import { Injectable } from '@angular/core';
import { ITAB } from './itab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITAB[] = [];
  activeUrl;
  tabOptions: ITAB[] = [
    { name: 'overview', url: '/overview' , tabId: '' }, 
    { name: 'constructionPlanning', url: '/constructionplanning/portfolio/' , tabId: '' },
    { name: 'characteristics', url: '/characteristics/property/' ,  tabId: '' },  
    { name: 'rent-roll', url: '/rent/property/' ,  tabId: '' },  
    { name: 'budget', url: '/budget/property/' ,  tabId: '' },      
    { name: 'process', url: '/process/property/' ,  tabId: '' },      
    { name: 'rating', url: '/rating/property/' ,  tabId: '' },      
    { name: 'profitAndLoss', url: '/profitAndLoss/portfolio/' ,  tabId: '' }, 
    { name: 'profitAndLoss', url: '/profitAndLoss/property/' ,  tabId: '' }, 
    { name: 'qualicasa', url: '/qualicasa/portfolio/' ,  tabId: '' }, 
    { name: 'qualicasa', url: '/qualicasa/property/' ,  tabId: '' }, 
    { name: 'hedonic', url: '/hedonic/portfolio/' ,  tabId: '' }, 
    { name: 'hedonic', url: '/hedonic/property/' ,  tabId: '' },
    { name: 'tasks',   url: '/tasks' ,  tabId: '' },
    { name: 'DCF',   url: '/dcf/portfolio/',  tabId: '' },
    { name: 'DCF',   url: '/dcf/property/',  tabId: '' }
  ];
 
  constructor() { }

  addTab(url: string,id = 0) {
    const tab = this.getTabOptionByUrl(url);
    if(id>0){
      if (!this.tabs.includes(tab)) {
        tab.tabId = tab.url + id;
        this.tabs.push(tab);
        this.activeUrl = tab.url  + id
      }
      else if (this.tabs.includes(tab)){
        var duplicateTabs = this.tabs.filter(tab => tab.url == tab.url)
        var tabCopy = {...tab};
        tabCopy.tabId = tabCopy.url + id;
        this.tabs.push(tabCopy);
        this.activeUrl = tabCopy.url  + id
      }
    }
    else{
      if (!this.tabs.includes(tab)) {
        tab.tabId = tab.url;
        this.tabs.push(tab);
        this.activeUrl = tab.url;
       // this.activeUrl = tab.url + '/' + id;
      }
      // else if (this.tabs.includes(tab)){
      //   var duplicateTabs = this.tabs.filter(tab => tab.url == tab.url)
      //   var tabCopy = {...tab};
      //   tabCopy.id = duplicateTabs.length + 1;
      //   this.tabs.push(tabCopy);
      //   this.activeUrl = tabCopy.url + '/' + tabCopy.id
      // }
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



