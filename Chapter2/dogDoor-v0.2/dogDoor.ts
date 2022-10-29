//nothing change here...
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
  }
}
export default DogDoor;

/* 
  I can close the door here with the help of a timer in the open behaviour.
  as closing the door is a behaviour of the door itself.
  and later in the next chapter there will be also a recognizer that will also need
  the door to be closed auto. so instead of duplication I have to put it here and let the 
  door handle it's own behaviour. so even if we added more devices that will open the door
  they all can close the door auto as it's a main feature of the door.
  
  some say that is breaking the SRP as open should only open the door and not to close it or to set a timer 
  but I think it's not likly to do so.
 
*/
