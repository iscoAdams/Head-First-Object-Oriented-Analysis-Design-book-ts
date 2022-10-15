import Guitar from "./Guitar";
import Inventory from "./Inventory";
(() => {
  const inventory: Inventory = new Inventory();
  initializeInventory(inventory);
  const whatErinLikes: Guitar = new Guitar(
    "",
    0,
    "fender",
    "Stratocastor",
    "electric",
    "Alder",
    "Alder"
  );
  const guitar: Guitar = inventory.searchGuitar(whatErinLikes);
  if (guitar) {
    console.log(
      `Erin, you might like this ${guitar.builder} ${guitar.model} ${guitar.type} guitar:\n${guitar.backWood} back and sides,\n${guitar.topWood} top.\nYou can have it for only $${guitar.price}!`
    );
    return;
  }
  console.log("Sorry, Erin, we have nothing for you.");

  // Add guitars to the inventory...
  function initializeInventory(inventory: Inventory) {
    inventory.addGuitar(
      "V95693",
      1499.95,
      "Fender", //upper case F (here is the problem that's not what i searched for)
      "Stratocastor",
      "electric",
      "Alder",
      "Alder"
    );
  }
})();
