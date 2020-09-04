import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: 'task',
        loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) 
      },
      { 
        path: 'overview', 
        loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) 
      }

      // {
      //   path: 'dcf',
      //   loadChildren: './modules/dcf/dcf.module#DcfModule'
      // },
      // {
      //   path: 'houses',
      //   loadChildren: './modules/houses/houses.module#HousesModule'
      // },
      // {
      //   path: 'qualicasa',
      //   loadChildren: './modules/qualicasa/qualicasa.module#QualicasaModule'
      // },
      // {
      //   path: 'renter-mirror',
      //   loadChildren: './modules/renter-mirror/renter-mirror.module#RentMirrorModule'
      // },
      // {
      //   path: 'masterdata',
      //   // already loadChildren: './modules/masterDataProperty/masterDataProperty.module#MasterDataPropertyModule'
      //   loadChildren: './modules/masterDataProperty/masterDataProperty.module#MasterDataPropertyModule'
      // },
      // {
      //   path: 'documanager',
      //   loadChildren: './modules/docu-manager/docu-manager.module#DocuManagerModule'
      // },
      // {
      //   path: 'profit-and-loss',
      //   loadChildren: './modules/profit-and-loss/profit-and-loss.module#ProfitAndLossModule'
      // },
      // {
      //   path: 'constructionplanning',
      //   loadChildren: './modules/construction-planning/construction-planning.module#ConstructionPlanningModule'
      // },
      // {
      //   path: 'importdata',
      //   loadChildren: './modules/import-data/import-data.module#ImportDataModule'
      // },
      // {
      //   path: 'language',
      //   loadChildren: './modules/language/language.module#LanguageModule'
      // },
      // {
      //   path: 'addressvalidator',
      //   loadChildren: './modules/address-validator/address-validator.module#AddressValidatorModule'
      // },
      // {
      //   path: 'cloneproperty',
      //   loadChildren: './modules/clone-property/clone-property.module#ClonePropertyModule'
      // },
      // {
      //   path: 'miniReport',
      //   loadChildren: './modules/mini-report/mini-report.module#MiniReportModule'
      // },
      // {
      //   path: 'process-stepper',
      //   loadChildren: './modules/process-stepper/process-stepper.module#ProcessStepperModule'
      // },
      // {
      //   path: 'budget',
      //   loadChildren: './modules/budget/budget.module#BudgetModule'
      // },
      // {
      //   path: 'loan-application',
      //   loadChildren: './modules/loan-application/loan-application.module#LoanApplicationModule'
      // },
      // {
      //   path: 'rating',
      //   loadChildren: './modules/rating/rating.module#RatingModule'
      // },
      // {
      //   path: 'hk-bk',
      //   loadChildren: './modules/hk-bk/hk-bk.module#HkBkModule'
      // },
      // {
      //   path: 'hedonic',
      //   loadChildren: './modules/hedonic/hedonic.module#HedonicModule'
      // },
      // {
      //   path: 'settings',
      //   loadChildren: './modules/settings/settings.module#SettingsModule'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
