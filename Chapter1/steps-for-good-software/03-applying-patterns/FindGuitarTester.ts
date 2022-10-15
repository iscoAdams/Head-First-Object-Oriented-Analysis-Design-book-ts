// new test drive to match the changes i've just made
import Guitar from "./Guitar";
import Inventory from "./Inventory";
import { Builder, Type, Wood, TypeUtil, BuilderUtil, WoodUtil } from "../Enums";
import GuitarSpec from "./GuitarSpec";
(() => {
  const inventory = new Inventory();
  initializeInventory(inventory);
  const whatErinLikes = new GuitarSpec(
    Builder.FENDER,
    "Stratocastor",
    Type.ELECTRIC,
    Wood.ALDER,
    Wood.ALDER,
    6
  );
  const matchingGuitars: Guitar[] = inventory.searchGuitar(whatErinLikes);
  if (!matchingGuitars.length)
    return console.log("Sorry, Erin, we have nothing for you.");
  console.log("“\nErin, you might like these guitars:\n");
  for (let guitar of matchingGuitars) {
    const spec: GuitarSpec = guitar.spec;
    console.log(
      `We have a ${BuilderUtil.toString(spec.builder)} ${spec.model} ${
        spec.numStrings
      } ${TypeUtil.toString(spec.type)}  guitar:\n\t${WoodUtil.toString(
        spec.backWood
      )} back and sides,\n\t${WoodUtil.toString(
        spec.topWood
      )}!\nYou can have it for only $${guitar.price}!`
    );
    console.log("-----------------------------------------------------");
  }
  function initializeInventory(inventory: Inventory) {
    inventory.addGuitar(
      new Guitar(
        "V9512",
        1549.95,
        new GuitarSpec(
          Builder.FENDER,
          "Stratocastor",
          Type.ELECTRIC,
          Wood.ALDER,
          Wood.ALDER,
          6
        )
      )
    );
    inventory.addGuitar(
      new Guitar(
        "V95693",
        1499.95,
        new GuitarSpec(
          Builder.FENDER,
          "Stratocastor",
          Type.ELECTRIC,
          Wood.ALDER,
          Wood.ALDER,
          6
        )
      )
    );
  }
})();
