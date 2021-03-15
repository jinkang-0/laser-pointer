class Trace {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 255;
  }

  update() {
    this.lifetime -= 3;
    if (this.lifetime <= 0) {
      removeFromArray(traces, this);
    }
  }

  display() {
    // size: lifetime as percentage of 255, multiplied by 5 (max size)
    circle(this.x, this.y, (this.lifetime / 255) * 5, 'orange');
  }

}