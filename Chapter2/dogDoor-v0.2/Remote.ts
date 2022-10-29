//the third requirement is added here and now the door can close auto...
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
      setTimeout(() => {
        this._door.close();
      }, 5000);
    }
  }
}
export default Remote;
