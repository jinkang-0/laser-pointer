class Vector {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  normalize() {
    const magnitude = Math.sqrt(this.x*this.x + this.y*this.y);
    this.x /= magnitude;
    this.y /= magnitude;
  }

}