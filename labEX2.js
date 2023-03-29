//2. Remember the first assignment of creating a grid of squares/circles? Great! Draw that but just draw a grid of shapes, no need to have your initial in the grid. Also, be sure to apply a gradient. Hint: Use nested loops.

let square1 = {
  startX: 0,
  startY: 0,
  size: 50,
  shade: 255
}
let offsetX = square1.size * 2;
let offsetY = square1.size

function setup() {
  createCanvas(400, 400);
  
  noLoop();
}

function draw() {
  background(0);
  
  for(let columnsDrawn = 0; columnsDrawn < 8; columnsDrawn++){
    for(let rowsDrawn = 0; rowsDrawn < 8; rowsDrawn++){
      if (rowsDrawn % 2 == 0){
        square1.startX = 50;
        square1.x = square1.startX + (offsetX * columnsDrawn);
        square1.y = square1.startY + (offsetY * rowsDrawn);
        
        square1.shade -= 7.5;
        
        drawSquare(square1);
      } else {
        square1.startX = 0;
        square1.x = square1.startX + (offsetX * columnsDrawn);
        square1.y = square1.startY + (offsetY * rowsDrawn);
        
        square1.shade -= 7.5;
        
        drawSquare(square1);
      }
    }
  }
  
}

function drawSquare(square){
  noStroke();
  fill(square.shade);
  rect(square.x, square.y, square.size);
}
