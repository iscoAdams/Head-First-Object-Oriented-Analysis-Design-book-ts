//deleted auto closing the door behaviour as it's handled by the door itself now...
import DogDoor from "./dogDoor";
class Remote {
  private _door: DogDoor;
  constructor(door: DogDoor) {
    this._door = door;
  }
  pressButton() {
    console.log("Pressing the remote control button...");
    if (this._door.isOpen()) {
      this._door.close();
    } else {
      this._door.open(); 
    }
  }
}
export default Remote;
