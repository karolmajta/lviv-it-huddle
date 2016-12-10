var canvasWidth;
var canvasHeight;
var rudolphX;
var rudolphY;
var rudolphVelocity = 0;
var clouds = [
  {x: 100, y: 100},
  {x: 400, y: 120},
  {x: 500, y: 400},
  {x: 320, y: 500}
];


function drawReindeer(reindeerX, reindeerY) {
  fill("brown");
  rect(reindeerX-20, reindeerY+5*sin(0.1*reindeerY), 10, 60);
  rect(reindeerX+10, reindeerY+5*cos(0.1*reindeerY), 10, 60);
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
  rect(reindeerX-35, reindeerY+15+10*cos(0.1*reindeerY), 10, 60);
  rect(reindeerX+25, reindeerY+15+10*sin(0.1*reindeerY), 10, 60);
}

function drawCloud(cloudX, cloudY) {
  fill("lightblue");
  rect(cloudX - 10, cloudY - 15, 20, 10);
  fill("navy");
  rect(cloudX - 20, cloudY - 5, 40, 10);
  fill("blue");
  rect(cloudX - 25, cloudY + 5, 50, 10);
}

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
    drawReindeer(rudolphX, rudolphY);
    rudolphY = rudolphY - rudolphVelocity;
    if (rudolphY < 0) {
      rudolphY = 0;
    }
    if (rudolphY > canvasHeight) {
      rudolphY = canvasHeight;
    }

    for (var i=0; i < clouds.length; i = i+1) {
      drawCloud(clouds[i].x, clouds[i].y);
    }
}

function keyPressed() {
  if (keyCode == 80) {
    rudolphVelocity = 5;
  }
  if (keyCode == 76) {
    rudolphVelocity = -5;
  }
}

function keyReleased() {
  rudolphVelocity = 0;
}
