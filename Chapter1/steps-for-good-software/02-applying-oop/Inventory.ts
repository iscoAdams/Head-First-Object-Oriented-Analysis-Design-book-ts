import Guitar from "./Guitar";
import GuitarSpec from "./GuitarSpec";
import { Builder, Type, Wood } from "../Enums";
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
      new Guitar(
        serialNumber,
        price,
        new GuitarSpec(builder, model, type, backWood, topWood)
      )
    );
  }
  getGuitar(serialNumber: string): Guitar | null {
    for (const guitar of this._guitars) {
      if (guitar.serialNumber === serialNumber) {
        return guitar;
      }
    }
    return null;
  }
  searchGuitar(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];
    for (const guitar of this._guitars) {
      /*
        if (guitarSpec.matches(searchSpec)) {matchingGuitars.push(guitar);}
      */
      const guitarSpec = guitar.spec;
      if (guitarSpec.builder !== searchSpec.builder) continue;
      const model = searchSpec.model;
      if (
        model != null &&
        model != "" &&
        guitarSpec.model.toLowerCase() !== model.toLowerCase()
      )
        continue;
      if (guitarSpec.type !== searchSpec.type) continue;
      if (guitarSpec.backWood !== searchSpec.backWood) continue;
      if (guitarSpec.topWood !== searchSpec.topWood) continue;
      matchingGuitars.push(guitar);
    }
    return matchingGuitars;
  }
}
export default Inventory;
