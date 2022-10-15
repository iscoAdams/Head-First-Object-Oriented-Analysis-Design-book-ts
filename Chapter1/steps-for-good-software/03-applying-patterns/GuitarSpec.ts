//added one property and an interface to interact with it
import { Type, Builder, Wood } from "../Enums";
class GuitarSpec {
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;
  private _numStrings: number;
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood,
    numStrings: number
  ) {
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
    this._numStrings = numStrings;
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
  get numStrings(): number {
    return this._numStrings;
  }
  /* 
    this behaviour belongs here 
    GuitarSpec is the only place that knows about the properties of a guitar
    and it's the only place that can compare them
    and instead of handling that behaviour somewhere else 
    I'm handling it here 
    and that's called delegation 
    as I'm delegating the behaviour to the class that knows about how to do that task
    while the only place i'm using this behaviour is in the Inventory class,
    I'm dealing with that behaviour here to make my object loosly coupled to add more flexibility
  */
  matches(guitar: GuitarSpec): boolean {
    if (this._builder !== guitar.builder) return false;
    if (this._model !== guitar.model) return false;
    if (this._type !== guitar.type) return false;
    if (this._backWood !== guitar.backWood) return false;
    if (this._topWood !== guitar.topWood) return false;
    if (this._numStrings !== guitar.numStrings) return false;
    return true;
  }
}
export default GuitarSpec;
