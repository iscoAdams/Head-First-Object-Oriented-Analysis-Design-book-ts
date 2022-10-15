//there are few changes to class methods and properties
import Guitar from "./Guitar";
import { Type, Builder, Wood } from "../Enums";
class Inventory {
  private _guitars: Guitar[] = [];
  addGuitar(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ): void {
    this._guitars.push(
      new Guitar(serialNumber, price, builder, model, type, backWood, topWood)
    );
  }
  getGuitar(serialNumber: string): Guitar {
    for (let guitar of this._guitars) {
      if (guitar.serialNumber === serialNumber) {
        return guitar;
      }
    }
    return null;
  }
  //! instead of returning only one match, I am interested in returning all matches
  searchGuitar(searchGuitar: Guitar): Guitar[] {
    let matchingGuitars: Guitar[] = [];
    for (let guitar of this._guitars) {
      const builder = searchGuitar.builder;
      if (builder !== guitar.builder) continue;
      const model = searchGuitar.model.toLowerCase();
      if (
        model !== null &&
        model !== "" &&
        model !== guitar.model.toLowerCase()
      )
        continue;
      const type = searchGuitar.type;
      if (type !== guitar.type) continue;
      const backWood = searchGuitar.backWood;
      if (backWood !== guitar.backWood) continue;
      const topWood = searchGuitar.topWood;
      if (topWood !== guitar.topWood) continue;
      matchingGuitars.push(guitar);
    }
    return matchingGuitars;
  }
}
export default Inventory;
