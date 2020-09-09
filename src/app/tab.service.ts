import { Injectable } from '@angular/core';
import { ITAB } from './itab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITAB[] = [];
  activeUrl;
  tabOptions: ITAB[] = [
    { name: 'overview', path: '/overview' , tabId: '',url: '', actionBtn: []}, 
    { name: 'constructionPlanning', path: '/constructionplanning/portfolio/' , tabId: '',url: '' , actionBtn: []},
    { name: 'characteristics', path: '/characteristics/property/' ,  tabId: '',url: '' , actionBtn: ["Save", "Cancel"]},  
    { name: 'rent-roll', path: '/rent/property/' ,  tabId: '' ,url: '', actionBtn: ["Export Worksheets", "Reports(DropDown)"]},  
    { name: 'budget', path: '/budget/property/' ,  tabId: '',url: '' , actionBtn: []},      
    { name: 'process', path: '/process/property/' ,  tabId: '' ,url: '', actionBtn: ["Save", "Cancel"]},      
    { name: 'rating', path: '/rating/property/' ,  tabId: '' ,url: '', actionBtn: []},      
    { name: 'profitAndLoss', path: '/profitAndLoss/portfolio/' ,  tabId: '',url: '' , actionBtn: ["Export Worksheet"]}, 
    { name: 'profitAndLoss', path: '/profitAndLoss/property/' ,  tabId: '',url: '' , actionBtn: ["Save", "Export Worksheet"]}, 
    { name: 'qualicasa', path: '/qualicasa/portfolio/' ,  tabId: '',url: '' , actionBtn: ["Export Data"]}, 
    { name: 'qualicasa', path: '/qualicasa/property/' ,  tabId: '' ,url: '', actionBtn: ["Export Data", "New Building"]}, 
    { name: 'hedonic', path: '/hedonic/portfolio/' ,  tabId: '' ,url: '', actionBtn: ["Hedonic Appraisal"]}, 
    { name: 'hedonic', path: '/hedonic/property/' ,  tabId: '' ,url: '', actionBtn: ["Appraisal Report", "Appraise", "Appraise and Save", "Cancel"]},
    { name: 'tasks',   path: '/tasks' ,  tabId: '' ,url: '', actionBtn: []},
    { name: 'DCF',   path: '/dcf/portfolio/',  tabId: '' ,url: '', actionBtn: ["New Valuation"]},
    { name: 'DCF',   path: '/dcf/property/',  tabId: '',url: '', actionBtn: ["New Valuation", "Reports(DropDown)"] }
  ];
 
  dcfPropertyBtnPermissions =  {
    'tab1': ["New Valuation", "Reports(DropDown)"],
    'tab2': ["Export Data", "Settings"],
    'tab3': ["Export Data", "Settings","Show active categories"],
    'tab4': ["Export Data", "Settings"],
    'tab5': ["Export Data", "Settings"],
    'tab6': []
  }

  dcfPortfolioBtnPermissions = {
      'tab1': ["New Valuation"],
      'tab2': [],
      'tab3': [],
      'tab4': []
  }
  

  constructor() { }

  addTab(path: string,id = null) {
    const tab = this.getTabOptionByPath(path);
    if(id!=null){
      if (!this.tabs.includes(tab)) {
        tab.tabId = tab.path + id;
        tab.url = tab.tabId;
        this.tabs.push(tab);
        this.activeUrl = tab.path  + id
      }
      else if (this.tabs.includes(tab)){
        var duplicateTabs = this.tabs.filter(tab => tab.path == tab.path)
        var tabCopy = {...tab};
        tabCopy.tabId = tabCopy.path + id + '/' + (duplicateTabs.length + 1);
        tabCopy.url = tabCopy.path + id
        this.tabs.push(tabCopy);
        this.activeUrl = tabCopy.path  + id + '/' + (duplicateTabs.length + 1);
      }
    }
    else{
      if (!this.tabs.includes(tab)) {
        tab.tabId = tab.path;
        tab.url = tab.tabId;
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
   
  getTabOptionByPath(path: string): ITAB {
    return this.tabOptions.find(tab => tab.path === path);
  }
  
  getActiveUrl(){
    return this.activeUrl;
  }
  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }

  getTab(){
    return this.tabs;
  }

  setActiveUrl(path){
    this.activeUrl = path;
  }

  refreshURL(path){
    let tab = this.tabOptions.find(tab => path.includes(tab.path))
    if(path == tab.path){
      this.addTab(path)
    }else{
      this.addTab(tab.path, path.split(tab.path)[1])
    }
  }
}



