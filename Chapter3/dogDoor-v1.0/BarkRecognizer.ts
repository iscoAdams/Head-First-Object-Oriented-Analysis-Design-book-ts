import DogDoor from "./dogDoor";

class BarkRecognizer {
  private _door: DogDoor;
  constructor(door: DogDoor) {
    this._door = door;
  }
  //We don’t have real hardware, so we’ll just simulate the hardware hearing a bark.
  recognize(bark: string) {
    console.log(`Bark recognizer heard a ${bark}`);
    this._door.open();
    // I don't want to repeat my self and close the door here again
  }
}
export default BarkRecognizer;
