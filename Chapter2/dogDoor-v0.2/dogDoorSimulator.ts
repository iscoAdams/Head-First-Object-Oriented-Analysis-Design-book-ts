import DogDoor from "./dogDoor";
import Remote from "./Remote";

(() => {
  const Door = new DogDoor(),
    remote = new Remote(Door);
  console.log("Fido barks to go outside...");
  remote.pressButton(); //let the dog out
  console.log("Fido has gone outside...");
  console.log("Fido's all done...");
  // console.log("Fido's back inside..."); //! main path
  setTimeout(() => {
    //! this whole block is the alternate bath
    //we are waiting or sleeping until the door is closed to simulate the situation
    console.log("...but he's stuck outside!");
    console.log("Fido starts barking...");
    setTimeout(() => {
      console.log("...so Gina grabs the remote control.");
      remote.pressButton();
      console.log("Fido's back inside...");
    }, 7000);
  }, 10000);
})();

/*
    while the door is closing auto i'm setting another timer to simulate the situation
    the dog barks again after 10 seconds and Gina grabs as soon as she hear him,
    she will let him again by pressing the button and the door wait 5 more seconds
    to get everything as it was before.
    
*/
