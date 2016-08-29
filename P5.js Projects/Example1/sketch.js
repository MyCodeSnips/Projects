var circle = {
  x : 0,
  y : 200,
  diam : 75
};

function setup() {
  createCanvas(600, 400);
  frameRate(90);
}

function draw() {
  background(0,0,255);
  fill(255,0,0);
  ellipse(circle.x,circle.y,circle.diam,circle.diam);
  circle.x += 1;
}