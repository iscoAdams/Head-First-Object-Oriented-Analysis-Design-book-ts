class DogDoor {
  private _open: boolean;
  constructor() {
    this._open = false;
    //by default, the door is closed
  }
  open() {
    console.log("The dog door opens.");
    this._open = true;
  }
  close() {
    console.log("The dog door closes.");
    this._open = false;
  }
  isOpen() {
    return this._open;
    //returns whither the door is open or not
  }
}
export default DogDoor;
