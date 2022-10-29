//seperating the door behaviour(open and auto-closing) from the rest of the code
class DogDoor {
  private _open: boolean;
  constructor() {
    this._open = false;
    //by default, the door is closed
  }
  open() {
    console.log("The dog door opens.");
    this._open = true;
    setTimeout(() => {
      this.close();
    }, 5000);
    /* 
      i'm handling this here as it's a behaviour of the door itself.
      and whatever open the door it sould always close itself.
      hence I don't want to repeat my self.
      and I don't think it's breaking the SRP as closing the door auto is a main feature of the door.
      and should always close after every open so they are attatched.
      and if the costumer wants to change the time it takes to close the door,
      they can do it here and it will affect all the openers
      without repeating or changing anything anywhere else.
    */
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
  not every thing that looks like an object is an object.
  the doog here sounds like an object but i CAN just simulate it with a function.
  as all i need from him is his bark and nothing else.
*/
