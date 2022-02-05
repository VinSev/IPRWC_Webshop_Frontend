export class Product {

  constructor(private _name: string,
              private _description: string,
              private _price: number,
              private _imageLink: string,
              private _id?: number) {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  set imageLink(value: string) {
    this._imageLink = value;
  }

  get id(): number {
    return <number>this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
