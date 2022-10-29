import DogDoor from "./dogDoor";
import BarkRecognizer from "./BarkRecognizer";
(() => {
  const door = new DogDoor();
  const recognizer = new BarkRecognizer(door);
  console.log("Fido barks to go outside...");
  recognizer.recognize("Woof");
  console.log("Fido has gone outside...");
  console.log("Fido's all done...");
  setTimeout(() => {
    console.log("...but he's stuck outside!");
    console.log("Fido starts barking...");
    setTimeout(() => {
      recognizer.recognize("Woof");
      console.log("Fido's back inside...");
    }, 6000);
  }, 8000);
})();
