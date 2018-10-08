var ship;
var asteroids = [];
var lasers = [];

function setup() {
  createCanvas(400,400);
  ship = new Ship();
  for(var i = 0; i<2; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  for(var i = 0; i<asteroids.length; i++) {
	if (ship.hits(asteroids[i])) {
//		console.log('oops');
	}
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  for(var i = lasers.length-1; i>=0; i--) {
    lasers[i].render();
    lasers[i].update();
    for(var j = asteroids.length-1; j>=0; j--) {
      if (lasers[i].hits(asteroids[j])) {
		  if(asteroids[j].r > 10) {
			var newAsteroids = asteroids[j].breakup();
			asteroids =asteroids.concat(newAsteroids);
		  }
        asteroids.splice(j, 1);
		lasers.splice(i, 1);
		break;
      }
		if (lasers[i].offscreen()) {
			lasers.splice(i,1);
			break;
		}
	}
  }
  console.log(lasers.length);
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
  if(key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
  }else if(keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  }else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  }else if (keyCode == UP_ARROW) {
      ship.boosting(true);
  }
}
