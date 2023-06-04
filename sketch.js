function setup() {

  createCanvas(400, 400);
  strokeWeight(2);
  stroke(51);
  rect(0,0,400,400);
};

function draw() {

};

function touchMoved(){

  fill(0);
  ellipse(mouseX,mouseY,5,5);

  return false;
}