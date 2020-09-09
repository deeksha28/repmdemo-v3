import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { TabService } from '../../tab.service';
import { Router, ActivatedRoute   } from '@angular/router';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public redirectURL = environment.redirectingURL;
  public showLabels = true;
  public showPortfolio = false;
  viewPortfolio: boolean = false
  tabs = [];
 

  constructor(private ds: DataService,public tabService: TabService, private router : Router, private activatedRoute : ActivatedRoute) { 
    this.ds.portalSubject.next(false)   
    let url = this.activatedRoute.snapshot['_routerState'].url;
    let path = this.tabService.refreshURL(url);    
    this.ds.tabValueSubject.next(this.tabService.getTabOptionByPath(path))
  }

  ngOnInit(): void {
    // this.router.navigate(['/overview'])
    this.ds.portfolioToggle.subscribe((value) => {
      this.viewPortfolio = value
    })
    this.tabs = this.tabService.tabs;
    console.log(this.router.url)    
    // if(this.router.url!=null){
    //   var path = this.router.url;
    //   path = this.tabService.tabOptions.find(tab => path.includes(tab.path)).path;
    //   var id;
    //   console.log(path)
    //   if(id!=null || id!=undefined)
    //     this.tabService.addTab(path,id);
    //   else
    //     this.tabService.addTab(path);
    //   this.router.navigate([this.router.url]);
    // }
      
  }

  toggleViewLabels() {
    this.showLabels = !this.showLabels;
  }

  toggleViewPortfolio() {
    this.showPortfolio = !this.showPortfolio;
  }
  closeTab(index: number, event: Event,url) {
    
    var activeTabId = document.getElementsByClassName('nav-link active')[0].getAttribute('id');
    var deleteTabId = this.tabs[index].tabId;
    this.tabService.deleteTab(index);
    if(this.tabService.getTab().length == 0){
      this.ds.tabValueSubject.next(null)
      this.tabService.addTab('/overview')
      this.router.navigate(['/overview']);
      this.ds.tabValueSubject.next(this.tabService.getTabOptionByPath('/overview')) 
    }
    
    else if(activeTabId == deleteTabId){
      this.router.navigateByUrl(this.tabs[0].url)
    }
    event.preventDefault();
    console.log(this.tabService.activeUrl);
  }
  onTabChange(event) {
    this.ds.tabValueSubject.next(this.tabs.find(tab=>tab.tabId == event.nextId))
    this.ds.dcfTabIdSubject.next('tab1')
    this.router.navigateByUrl(this.tabs.find(tab=>tab.tabId == event.nextId).url);
  }
}
