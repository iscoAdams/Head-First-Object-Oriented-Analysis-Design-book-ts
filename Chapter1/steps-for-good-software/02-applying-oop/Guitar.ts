// here instead of hardcoding all the props i'm making a reference to a GuitarSpec object for each guitar
// which includes subset of the guitar props encapsolated in that seperate class.
// that helps to reduce duplication
import GuitarSpec from "./GuitarSpec";
class Guitar {
  private _serialNumber: string;
  private _price: number;
  private _spec: GuitarSpec;

  constructor(serialNumber: string, price: number, spec: GuitarSpec) {
    /*
      i can also take all the arguments and then pass them to the new GuitarSpec object that will be equal to the reference i'm creating privatly
      but instead i'm making a (addGuitar) method in the inventory which will help me to take all the args and then will create a new GuitarSpec object with those args
      but the problem just moved from here to the inventory class so later i'm gonna fix it
      if i'm taking those args here as parameters to the current constructor i'll have a proplem when there's any change happens in the GuitarSpec class
      ex..if a new propery added to the GuitarSpec class i'll have to change the constructor here as well
      meaning that the props of the GuitarSpec are encapssolated and i don't care what that object holds
      the book mentioned that later as a problem but anyway that's also not a well designed class and not considerd a solution as well.

    */
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
