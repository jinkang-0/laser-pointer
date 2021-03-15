// find canvas
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


// define canvas elements
const pointer = new Pointer(canvas.width/2, canvas.height/2, 10);
const traces = [];
let walls = [];


// canvas setup & generation
function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  pointer.x = canvas.width / 2;
  pointer.y = canvas.height / 2;
  
  if (pointer.ray) {
    pointer.ray.x = canvas.width / 2;
    pointer.ray.y = canvas.height / 2;
  }

  // generate walls
  walls = [];
  for (let i = 0; i < 2; i++) {
    const x1 = random(0, canvas.width);
    const y1 = random(0, canvas.height);
    const x2 = random(0, canvas.width);
    const y2 = random(0, canvas.height);
    const wall = new Wall(x1, y1, x2, y2);
    walls.push(wall);
  }

  walls.push(new Wall(0, 0, canvas.width, 0));
  walls.push(new Wall(0, 0, 0, canvas.height));
  walls.push(new Wall(canvas.width, 0, canvas.width, canvas.height));
  walls.push(new Wall(0, canvas.height, canvas.width, canvas.height));

}
setup();


// resizing
window.addEventListener("resize", () => {
  setup();
});




// draw (update)
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // draw pointer and laser
  if (pointer.ray) pointer.ray.display();
  pointer.display();

  // display walls & check intersections
  walls.forEach(wall => {
    wall.display();
  })

  // check closest intersection
  pointer.pointAt(walls);

  // draw traces
  traces.forEach(trace => {
    if (!trace) return;
    trace.update();
    trace.display();
  })

  requestAnimationFrame(draw);
}
draw();




// update laser direction on mouse move
window.addEventListener('mousemove', e => {

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (pointer.ray) {
    pointer.ray.updateDir(mouseX, mouseY);
  }

});




// start casting laser
window.addEventListener('mouseup', e => {

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  pointer.cast(mouseX, mouseY);

});




// pointer movement
window.addEventListener('keydown', e => {

  const key = e.key;

  switch (key) {
    case 'w':
      pointer.move(0, -pointer.speed);
      break;
    case 'a':
      pointer.move(-pointer.speed, 0);
      break;
    case 's':
      pointer.move(0, pointer.speed);
      break;
    case 'd':
      pointer.move(pointer.speed, 0);
      break;
  }

});

