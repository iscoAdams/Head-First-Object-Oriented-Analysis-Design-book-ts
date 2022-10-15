//there are few changes to class methods and properties
import { Type, Builder, Wood } from "../Enums";
class Guitar {
  private _serialNumber: string;
  private _price: number;
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;

  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string, //i left it as a string as there are huge range to cover
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this._serialNumber = serialNumber;
    this._price = price;
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
  }
  set price(price: number) {
    this._price = price;
  }
  get price(): number {
    return this._price;
  }
  get serialNumber(): string {
    return this._serialNumber;
  }
  get builder(): Builder {
    return this._builder;
  }
  get model(): string {
    return this._model;
  }
  get type(): Type {
    return this._type;
  }
  get backWood(): Wood {
    return this._backWood;
  }
  get topWood(): Wood {
    return this._topWood;
  }
}
export default Guitar;
