//test drive was updated to meet the new requirements
import Guitar from "./Guitar";
import Inventory from "./Inventory";
import { Builder, Type, Wood, TypeUtil, BuilderUtil, WoodUtil } from "../Enums";
(() => {
  const inventory = new Inventory();
  initializeInventory(inventory);
  const whatErinLikes = new Guitar(
    "",
    0,
    Builder.FENDER,
    "Stratocastor",
    Type.ELECTRIC,
    Wood.ALDER,
    Wood.ALDER
  );

  //instead of returning only one match, I am interested in returning all matches
  const matchingGuitars: Guitar[] = inventory.searchGuitar(whatErinLikes);
  if (!matchingGuitars.length)
    return console.log("Sorry, Erin, we have nothing for you.");
  console.log("“\nErin, you might like these guitars:\n");
  for (let guitar of matchingGuitars) {
    console.log(
      `We have a ${BuilderUtil.toString(guitar.builder)} ${
        guitar.model
      } ${TypeUtil.toString(guitar.type)} guitar:\n\t${WoodUtil.toString(
        guitar.backWood
      )} back and sides,\n\t${WoodUtil.toString(
        guitar.topWood
      )} top.\nYou can have it for only $${guitar.price}!`
    );
    console.log("-----------------------------------------------------");
  }
  function initializeInventory(inventory: Inventory) {
    // here are 2 Guitars in the inventory and i'm getting only 1 of them
    // we want customer to choose.
    inventory.addGuitar(
      "V9512",
      1549.95,
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      Wood.ALDER,
      Wood.ALDER
    );
    inventory.addGuitar(
      "V95693",
      1499.95,
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      Wood.ALDER,
      Wood.ALDER
    );
  }
})();
