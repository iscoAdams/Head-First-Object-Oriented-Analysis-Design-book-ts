import Guitar from "./Guitar";
import GuitarSpec from "./GuitarSpec";
class Inventory {
  private _guitars: Guitar[] = [];

  addGuitar(guitar: Guitar): void {
    this._guitars.push(guitar);
  }
  /* 
    part of that task is handled somewhere else by other object.
    i'm delegating comparison to GuitarSpec where all the props are stored
    as I only care here about finding what is actually in the inventory 
    not the comparison which is part of other object so i'm letting that object handle that behaviour for me
  */
  searchGuitar(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];
    for (const guitar of this._guitars) {
      if (guitar.spec.matches(searchSpec)) {
        matchingGuitars.push(guitar);
      }
    }
    return matchingGuitars;
  }
}
export default Inventory;
