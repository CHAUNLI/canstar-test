import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceCompanyComponent } from '../insurance-company/insurance-company.component';
import { DataCompanyComponent } from '../data-company/data-company.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: '', redirectTo: '/form_fill', pathMatch: 'full' },
  { path: 'form_fill',  component: InsuranceCompanyComponent },
  { path: 'data', component: DataCompanyComponent },
  { path: '*',     component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouteMouduleModule { }
