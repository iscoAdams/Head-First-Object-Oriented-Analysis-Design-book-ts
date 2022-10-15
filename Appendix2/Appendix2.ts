class Airplane {
  private _speed: number; // #speed
  constructor(speed: number) {
    this._speed = speed;
  }
  get speed(): number {
    return this._speed;
  }
  set speed(speed: number) {
    this._speed = speed;
  }
}
class Jet extends Airplane {
  private static SPEED: number = 2; // #constant used with the constructor
  constructor(speed: number) {
    super(speed * Jet.SPEED);
    //can't use this here because it's not initialized yet to be passed as an argument
    //and also cauz it's a static variable called with the class name (constructor) not as a class property
  }
  /*
        set speed(speed: number) {
            super.speed = speed * Jet.SPEED;
        } 

        
        https://github.com/Microsoft/TypeScript/issues/338
        https://stackoverflow.com/questions/38717725/why-cant-get-superclasss-property-by-getter-typescript
        it's not possible to override a getter/setter with a property in a subclass
        instead of overriding the getter/setter i can use normal methods or i leave them as the parent class
        and here as part of the interface i'm leaving the setter as the parent as i'm not interested in changing the speed
        this way, instead i use accelrate() method 
    */
  accelerate(): void {
    super.speed = this.speed * 2; // #accessor (we can use super,this as equals) it's a setter
  }
}
//puzzle
(function flyTest(): void {
  const biPlane = new Airplane(212);
  console.log(biPlane.speed);
  const boeing = new Jet(422);
  console.log(boeing.speed); //speed*2

  let x: number = 0;
  while (x < 4) {
    boeing.accelerate();
    console.log(boeing.speed);
    if (boeing.speed > 5000) biPlane.speed = biPlane.speed * 2;
    else boeing.accelerate();
    x++;
  }
  console.log(biPlane.speed);
})();
