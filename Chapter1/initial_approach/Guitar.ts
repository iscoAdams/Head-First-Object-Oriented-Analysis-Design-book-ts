class Guitar {
  private _serialNumber: string;
  private _price: number;
  // private _spec: GuitarSpec;  (not yet)
  private _builder: string;
  private _model: string;
  private _type: string;
  private _backWood: string;
  private _topWood: string;

  constructor(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
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
  get builder(): string {
    return this._builder;
  }
  get model(): string {
    return this._model;
  }
  get type(): string {
    return this._type;
  }
  get backWood(): string {
    return this._backWood;
  }
  get topWood(): string {
    return this._topWood;
  }
}
export default Guitar;