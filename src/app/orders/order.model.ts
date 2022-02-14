import {Product} from "../products/product.model";

export class Order {
  constructor(private _streetName: String,
              private _houseNumber: number,
              private _postcode: String,
              private _placeName: String,
              public _products: Product[],
              public _dateLastUpdated: String,
              private _id?: number) { }

  public get streetName(): String {
    return this._streetName;
  }

  public set streetName(value: String) {
    this._streetName = value;
  }

  public get houseNumber(): number {
    return this._houseNumber;
  }

  public set houseNumber(value: number) {
    this._houseNumber = value;
  }

  public get postcode(): String {
    return this._postcode;
  }

  public set postcode(value: String) {
    this._postcode = value;
  }

  public get placeName(): String {
    return this._placeName;
  }

  public set placeName(value: String) {
    this._placeName = value;
  }

  public get products(): Product[] {
    return this._products;
  }

  public set products(value: Product[]) {
    this._products = value;
  }

  public get dateLastUpdated(): String {
    return this._dateLastUpdated;
  }

  public set dateLastUpdated(value: String) {
    this._dateLastUpdated = value;
  }

  public get id(): number {
    return <number>this._id;
  }

  public set id(value: number) {
    this._id = value;
  }
}
