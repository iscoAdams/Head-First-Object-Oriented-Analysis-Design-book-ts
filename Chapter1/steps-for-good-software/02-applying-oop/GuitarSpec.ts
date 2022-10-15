// I'm encabsulating the Generic guitar properties in a seperate class
// and now it's duty is clear and serves only one purpose or related purposes
// which are search requests and guitar details.
import { Type, Builder, Wood } from "../Enums";
class GuitarSpec {
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
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
  /*
        matches(guitar: GuitarSpec): boolean {
            if (this._builder !== guitar.builder) return false;
            if (this._model !== guitar.model) return false;
            if (this._type !== guitar.type) return false;
            if (this._backWood !== guitar.backWood) return false;
            if (this._topWood !== guitar.topWood) return false;
            return true;
        }
    */
}
export default GuitarSpec;
