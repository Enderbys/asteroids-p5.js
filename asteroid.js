var ship;

function setup() {
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();
  background(0);
}

function draw() {
//  background(0);
  ship.turn();
  ship.render();
  ship.update();
  ship.edges();
}

function keyReleased() {
  if(keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    ship.setRotation(0);
  }
  if(keyCode == UP_ARROW) {
    ship.boosting(false);
  }
}
function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  }else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  }else if (keyCode == UP_ARROW) {
      ship.boosting(true);
  }
}
