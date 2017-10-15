import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {company} from "./model/company";


@Injectable()
export class CompanyInfoService {

  constructor(private http:Http) {

  }
  getCompanies() {
    const url ='assets/tables-data.json';
    return this.http.get(url)
      .toPromise()
      .then(res=>res.json())
      .catch(this.handleError);
  }


  createCompany(newCompany:company) {
    const url ='http://localhost:3000/info';

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(url, JSON.stringify(newCompany), options)

      .toPromise()

      .then(response => response.json())

      .catch(this.handleError);

  }





  private handleError(error: any): Promise<any> {

    console.error('An error occurred', error); // for demo purposes only

    return Promise.reject(error.message || error);

  }

}
