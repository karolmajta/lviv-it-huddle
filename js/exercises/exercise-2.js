var canvasWidth;
var canvasHeight;
var rudolphX;
var rudolphY;

function setup() {
  var parent = document.getElementById('game-container');
  canvasWidth = parent.clientWidth;
  canvasHeight = parent.clientHeight;
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('game-container');
  rudolphX = canvasWidth/2;
  rudolphY = canvasHeight/2;
}

function draw()
{
    background(255, 255, 255);
    noStroke();

    fill("brown")
    rect(rudolphX-20, rudolphY, 10, 60);
    rect(rudolphX+10, rudolphY, 10, 60);
    fill("peru");
    rect(rudolphX-40, rudolphY-30, 80, 60);
    rect(rudolphX+20, rudolphY-40, 20, 15);
    rect(rudolphX+20, rudolphY-60, 50, 25);
    fill("black")
    rect(rudolphX+5, rudolphY-65, 20, 10);
    rect(rudolphX+5, rudolphY-75, 10, 15);
    fill("red")
    rect(rudolphX+65, rudolphY-65, 10, 10);
    fill("sienna")
    rect(rudolphX-35, rudolphY+15, 10, 60);
    rect(rudolphX+25, rudolphY+15, 10, 60);
}
