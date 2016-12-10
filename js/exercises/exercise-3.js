var canvasWidth;
var canvasHeight;

function drawReindeer(reindeerX, reindeerY) {
  fill("brown");
  rect(reindeerX-20, reindeerY, 10, 60);
  rect(reindeerX+10, reindeerY, 10, 60);
  fill("peru");
  rect(reindeerX-40, reindeerY-30, 80, 60);
  rect(reindeerX+20, reindeerY-40, 20, 15);
  rect(reindeerX+20, reindeerY-60, 50, 25);
  fill("black");
  rect(reindeerX+5, reindeerY-65, 20, 10);
  rect(reindeerX+5, reindeerY-75, 10, 15);
  fill("red");
  rect(reindeerX+65, reindeerY-65, 10, 10);
  fill("sienna");
  rect(reindeerX-35, reindeerY+15, 10, 60);
  rect(reindeerX+25, reindeerY+15, 10, 60);
}

function setup() {
  var parent = document.getElementById('game-container');
  canvasWidth = parent.clientWidth;
  canvasHeight = parent.clientHeight;
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('game-container');
}

function draw()
{
    background(255, 255, 255);
    noStroke();
    drawReindeer(100, 100);
    drawReindeer(300, 400);
    drawReindeer(300, 600);
}
