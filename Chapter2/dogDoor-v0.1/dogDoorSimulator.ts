import DogDoor from "./DogDoor";
import Remote from "./Remote";

(() => {
  const Door = new DogDoor(),
    remote = new Remote(Door);
  console.log("Fido barks to go outside...");
  remote.pressButton();
  console.log("Fido has gone outside...");
  remote.pressButton(); // I have to close it manually not to let anything else in
  console.log("Fido's all done...");
  setTimeout(() => {
    console.log("...but he's stuck outside!");
    console.log("Fido starts barking...");
    setTimeout(() => {
      console.log("...so Gina grabs the remote control.");
      remote.pressButton();
      console.log("Fido's back inside...");
      remote.pressButton(); // again, I have to close it manually
    }, 7000);
  }, 10000);
})();
