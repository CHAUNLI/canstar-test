/**
 * Created by lichuan on 15/10/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class yourService {
  constructor(public http:Http) {}

  getData() {
    return this.http.get("../Data/company-info.json")
      .map((res:Response) => res.json()); //records in this case
  }
}
