import { Component, OnInit } from '@angular/core';
import { CompanyInfoService} from '../company-info.service';
import {company} from "../model/company";

@Component({
  selector: 'app-insurance-company',
  templateUrl: './insurance-company.component.html',
  styleUrls: ['./insurance-company.component.css'],
  providers:[CompanyInfoService]
})
export class InsuranceCompanyComponent implements OnInit {

  names:string;
  numbers:string;
  businesss:string;
  newCompany=new company(this.names, this.numbers, this.businesss);

  companies: any[];
  constructor(private infoService:CompanyInfoService) {

  }
  companyName = 'canstar';



  ngOnInit() {
  }
  onSubmit(value) {
    this.names=value.name;
    this.numbers=value.telephone;
    this.businesss=value.business;
    this.infoService.createCompany(value);
    console.dir(value);
  }

}
