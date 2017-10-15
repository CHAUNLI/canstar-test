import { Component, OnInit } from '@angular/core';
import { CompanyInfoService} from '../company-info.service';

@Component({
  selector: 'app-data-company',
  templateUrl: './data-company.component.html',
  styleUrls: ['./data-company.component.css'],
  providers:[CompanyInfoService]
})
export class DataCompanyComponent implements OnInit {


  companies: any[];
  constructor(private infoService:CompanyInfoService) {

  }

  ngOnInit() {
    this.infoService.getCompanies()
      .then(res => {
        this.companies=res.companies;
      });
  }

}
