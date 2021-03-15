// draws a circle
function circle(x, y, r, color) {
  if (color) c.fillStyle = color;
  c.beginPath();
  c.arc(x, y, r, 0, 360);
  c.closePath();
  c.fill();
}


// draws a line
function line(x1, y1, x2, y2, color) {
  if (color) c.strokeStyle = color;
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.closePath();
  c.lineWidth = 2;
  c.stroke();
}


// generates a random number
function random(min, max) {
  return (Math.random() * (max - min)) + min;
}


// removes an object from an array
function removeFromArray(arr, obj) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === obj) {
      arr.splice(i, 1);
      return;
    }
  }
}


// calculates distance between two points
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
}

