/**
 * Created by lichuan on 15/10/17.
 */
export class company {


  constructor(
    public _id: number,
    public _nameOfCompany: string,
    public _teleNumber: number,
    public _business: string
  ) { }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nameOfCompany(): string {
    return this._nameOfCompany;
  }

  set nameOfCompany(value: string) {
    this._nameOfCompany = value;
  }

  get teleNumber(): number {
    return this._teleNumber;
  }

  set teleNumber(value: number) {
    this._teleNumber = value;
  }

  get business(): string {
    return this._business;
  }

  set business(value: string) {
    this._business = value;
  }

}
