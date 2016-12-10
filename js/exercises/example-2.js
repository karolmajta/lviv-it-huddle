var canvasWidth;
var canvasHeight;
var santaX;
var santaY;

function setup() {
  var parent = document.getElementById('game-container');
  canvasWidth = parent.clientWidth;
  canvasHeight = parent.clientHeight;
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('game-container');
  santaX = canvasWidth/2;
  santaY = canvasHeight/2;
}

function draw()
{
    background(255, 255, 255);
    noStroke();
    // draw the legs
    fill(200, 0, 0);
    rect(santaX-25, santaY+20, 10, 30)
    rect(santaX+15, santaY+20, 10, 30)
    // draw arms
    fill(200, 0, 0);
    rect(santaX-50, santaY-20, 100, 10);
    // draw the head
    fill(255, 227, 159);
    rect(santaX-15, santaY-60, 30, 30);
    // draw the torso
    fill(230, 0, 0);
    rect(santaX-30, santaY-30, 60, 60);
    // draw the beard
    fill("lightgrey");
    rect(santaX-15, santaY-35, 30, 40);
    // draw the hat
    fill(230, 0, 0);
    rect(santaX-20, santaY-75, 40, 20);
    rect(santaX-30, santaY-85, 40, 10);
}
