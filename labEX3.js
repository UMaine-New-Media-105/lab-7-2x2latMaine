//3. Duplicate your previous sketch and modify it to add mouse interactivity. It could be something like changing gradient based on mouse's coordinate, changing shape on mouse click, or dropping a random row of icons on top of already present rows.

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
  
  
  angleMode(DEGREES);
  
  frameRate(10);
}

function draw() {
  background(0);
  
  for(let columnsDrawn = 0; columnsDrawn < 8; columnsDrawn++){
    for(let rowsDrawn = 0; rowsDrawn < 8; rowsDrawn++){
      if (rowsDrawn % 2 == 0){
        square1.startX = 50;
        square1.x = square1.startX + (offsetX * columnsDrawn);
        square1.y = square1.startY + (offsetY * rowsDrawn);
        
        square1.changeColor = square.shade - (7.5 * rowsDrawn);
        
        drawSquare(square1);
      } else {
        square1.startX = 0;
        square1.x = square1.startX + (offsetX * columnsDrawn);
        square1.y = square1.startY + (offsetY * rowsDrawn);
        
        square1.changeColor = square.shade - (7.5 * rowsDrawn);
        
        drawSquare(square1);
      }
    }
  }
  
  if (mouseIsPressed){
    drawSmile();
  }
  
}

function drawSquare(square){
  noStroke();
  fill(square.changeColor);
  rect(square.x, square.y, square.size);
}

function drawSmile(){
  push();
  fill('red');
  ellipse(100, 100, 50, 100);
  ellipse(300, 100, 50, 100);
  stroke('red');
  strokeWeight(20);
  noFill();
  arc(200, 250, 250, 200, 0, 180);
  pop();
}
