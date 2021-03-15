class Ray {

  constructor(x, y, dir, len) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.length = len;
    this.point;
    
    this.centerDir(x, y);
  }

  intersect(wall) {
    const x1 = wall.x1;
    const y1 = wall.y1;
    const x2 = wall.x2;
    const y2 = wall.y2;
    const x3 = this.x;
    const y3 = this.y;
    const x4 = this.x + this.dir.x;
    const y4 = this.y + this.dir.y;

    const denom = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4);
    const t = ( (x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4) ) / denom;
    const u = ( (x2 - x1)*(y1 - y3) - (y2 - y1)*(x1 - x3) ) / denom;

    if (t > 0 && t < 1 && u > 0) {
      let pt = new Trace();
      pt.x = x1 + t*(x2 - x1);
      pt.y = y1 + t*(y2 - y1);
      return pt;
    } else {
      return;
    }

  }

  updateDir(x, y) {
    this.dir.x = x;
    this.dir.y = y;
    this.centerDir(this.x, this.y);
  }

  centerDir(x, y) {
    this.dir.x -= x;
    this.dir.y -= y;
    this.dir.normalize();
  }

  display() {
    if (this.point) {
      line(this.x, this.y, this.point.x, this.point.y, 'red');
    }
  }

}