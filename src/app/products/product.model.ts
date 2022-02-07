export class Product {

  constructor(private _name: string,
              private _description: string,
              private _price: number,
              private _imageLink: string,
              private _id?: number,
              private _amount?: number) {
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }

  public get imageLink(): string {
    return this._imageLink;
  }

  public set imageLink(value: string) {
    this._imageLink = value;
  }

  public get id(): number {
    return <number>this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get amount(): number {
    return <number>this._amount;
  }

  public set amount(value: number) {
    this._amount = value;
  }
}
