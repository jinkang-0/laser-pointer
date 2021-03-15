class Pointer {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = 10;
    this.ray;
  }

  pointAt(walls) {
    if (!this.ray) return;

    let smallestDistance = Infinity;
    let trace;

    walls.forEach(wall => {
      const pt = this.ray.intersect(wall);
      if (pt) {
        const distance = dist(pt.x, pt.y, this.x, this.y);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          trace = pt;
        }
      }
    })

    pointer.ray.point = new Vector(trace.x, trace.y);
    traces.push(trace);
  }

  cast(x, y) {
    if (this.ray) {
      this.ray = null;
      return;
    }
    const dir = new Vector(x, y);
    this.ray = new Ray(this.x, this.y, dir, 1000);
  }

  move(x, y) {

    if (this.willBeOutOfBounds(x, y))
      return;
    
    this.x += x;
    this.y += y;
    
    if (this.ray) {
      this.ray.x += x;
      this.ray.y += y;
    }
  }

  display() {
    circle(this.x, this.y, this.r, 'white');
  }

  willBeOutOfBounds(x, y) {
    const horizontal = (this.x + x + this.r > canvas.width || this.x + x - this.r < 0);
    const vertical = (this.y + y + this.r > canvas.height || this.y + y - this.r < 0);
    return horizontal || vertical;
  }

}