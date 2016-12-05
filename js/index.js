var canvasWidth;
var canvasHeight;
var paddleHeight = 10;
var paddleWidth;
var game;

function setup() {
    var parent = document.getElementById('sketch-holder');
    canvasWidth = parent.offsetWidth;
    canvasHeight = parent.offsetHeight;

    paddleHeight = 10;
    paddleWidth = Math.max(canvasWidth/10, 40);

    game = newGame();

    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-holder');
    background(255, 105, 180);
    stroke(255, 255, 255);
}

function draw()
{
    background(255, 105, 180);
    rect(game.player1.pos-paddleWidth/2, 0, paddleWidth, paddleHeight);
    rect(game.player2.pos-paddleWidth/2, canvasHeight-paddleHeight, paddleWidth, paddleHeight);
    rect(game.ball.pos.x-paddleHeight/2, game.ball.pos.y-paddleHeight/2, paddleHeight, paddleHeight);

    game.ball.pos.x += game.ball.v.x;
    game.ball.pos.y += game.ball.v.y;

    if (game.ball.v.y < 0) {
        game.player1.v = (game.ball.pos.x - game.player1.pos) * 0.1;
        game.player2.v = 0;
    } else {
        game.player1.v = 0;
        game.player2.v = (game.ball.pos.x - game.player2.pos) * 0.1;
    }
    game.player1.pos += game.player1.v;
    game.player2.pos += game.player2.v;
    game.player1.pos = Math.max(paddleWidth/2, Math.min(canvasWidth-paddleWidth/2, game.player1.pos));
    game.player2.pos = Math.max(paddleWidth/2, Math.min(canvasWidth-paddleWidth/2, game.player2.pos));

    if (game.ball.pos.y < paddleHeight || game.ball.pos.y > canvasHeight-paddleHeight)
        game.ball.v.y *= -1;
    if (game.ball.pos.x < 0 || game.ball.pos.x > canvasWidth)
        game.ball.v.x *= -1;
}

function windowResized() {
    var parent = document.getElementById('sketch-holder');
    canvasWidth = parent.offsetWidth;
    canvasHeight = parent.offsetHeight;
    resizeCanvas(canvasWidth, canvasHeight);
    game = newGame();
}

function newGame() {
    return {
        player1: {
            pos: canvasWidth/2,
                v: 0,
                a: 0
        },
        player2: {
            pos: canvasWidth/2,
                v: 0,
                a: 0
        },
        ball: {
            pos: {x: canvasWidth/2, y: canvasHeight/2},
            v: {x: canvasWidth/500, y: canvasHeight/100}
        }
    };
}