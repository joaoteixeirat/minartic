function setup() {

  createCanvas(400, 400);
  strokeWeight(2);
  stroke(51);
  rect(0, 0, 400, 400);
};

function draw() {

};

const paths = [];
let currentPath = [];

function touchMoved() {

  noFill();

  const point = {

    x: mouseX,
    y: mouseY
  };

  currentPath.push(point);

  paths.forEach(

    path => {

      beginShape();
      path.forEach(({ x, y }) => vertex(x, y));
      endShape();
    }
  )

  return false;
}

function mousePressed() {

  currentPath = [];
  paths.push(currentPath);
}