//I 've already done that step before so this file remains the same
import GuitarSpec from "./GuitarSpec";
class Guitar {
  private _serialNumber: string;
  private _price: number;
  private _spec: GuitarSpec;

  constructor(serialNumber: string, price: number, spec: GuitarSpec) {
    //instead of passing the args i'm passing the object, whatever that object holds i don't care here
    // Just take in a GuitarSpec directly now, instead of creating one in this constructor.
    this._serialNumber = serialNumber;
    this._price = price;
    this._spec = spec;
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
  get spec(): GuitarSpec {
    return this._spec;
  }
}
export default Guitar;
