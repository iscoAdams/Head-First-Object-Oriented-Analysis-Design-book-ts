import DogDoor from "./DogDoor";
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
