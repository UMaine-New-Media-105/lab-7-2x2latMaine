//1. Create a sketch in which you draw a shape that diagonally stretches across the canvas. Create an array of colors and then use the random function to randomize the color of each shape in the diagonal. Make sure to use at drawing at least 15 shapes.
let shape1 = {
  startX: 0,
  startY: 0,
  shapeSize: 50,
};
let offset;
let fillColors = ['darkolivegreen', 'deepskyblue', 'lightseagreen'];
let strokeColors = ['olivedrab', 'skyblue', 'mediumturquoise']


function setup() {
  createCanvas(400, 400);
  
  offset = shape1.shapeSize;
  noLoop();
}

function draw() {
  background('midnightblue');
  
  for (let counter = 0; counter < 10; counter++){
    shape1.x = shape1.startX + (offset * counter);
    shape1.y = shape1.startY + (offset * counter);
    fill(random(fillColors));
    stroke(random(strokeColors));
    drawShape(shape1);
  }
}

function drawShape(shape) {
  strokeWeight(5);
  ellipse(shape.x, shape.y, shape.shapeSize);
}
