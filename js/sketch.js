
let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.25;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -1)
}

function windowResized(){
    resizeCanvas(windowWidht, windowHeight);
}

function draw(){
    clear();
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
    drawTrail(xPos, yPos);
}

function drawTrail(_x, _y){
    stroke('#80971a')
    strokeWeight(1);
    fill(0, 0, 0, 0);
    ellipse(_x, _y, 30, 30);
    ellipse(_x - 10 , _y - 10, 30, 30);
    ellipse(_x, _y - 20, 30, 30);
    ellipse(_x + 10, _y - 10, 30, 30);
}