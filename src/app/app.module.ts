import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrevNextComponent } from './shared/components/prev-next/prev-next.component';
import { SvgIconsModule } from './shared/components/svg-icons/svg-icons.module';
import { NgbPaginationModule, NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from "./shared/services/data.service";
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    PrevNextComponent,
    PortfolioComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule,
    NgbDropdownModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
