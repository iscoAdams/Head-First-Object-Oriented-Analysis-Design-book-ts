import Guitar from "./Guitar";
class Inventory {
  private _guitars: Guitar[] = [];
  addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
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
  searchGuitar(searchGuitar: Guitar): Guitar {
    for (let guitar of this._guitars) {
      const builder = searchGuitar.builder;
      if (builder !== null && builder !== "" && builder !== guitar.builder)
      continue;
      const model = searchGuitar.model;
      if (model !== null && model !== "" && model !== guitar.model) continue;
      const type = searchGuitar.type;
      if (type !== null && type !== "" && type !== guitar.type) continue;
      const backWood = searchGuitar.backWood;
      if (backWood !== null && backWood !== "" && backWood !== guitar.backWood)
      continue;
      const topWood = searchGuitar.topWood;
      if (topWood !== null && topWood !== "" && topWood !== guitar.topWood)
      continue;
      return guitar;
    }
    return null;
  }
  /*
  searchGuitar(searchGuitar: Guitar): Guitar {
    for (let i = 0; i < this._guitars.length; i++) {
      const guitar = this._guitars[i];
      if (guitar.serialNumber === searchGuitar.serialNumber) {
        return guitar;
      }
    }
    return null;
  }
  */
}
export default Inventory;
