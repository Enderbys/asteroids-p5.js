function Asteroid(pos, r) {
  if (pos) {
	this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width),random(height));
  }
  if (r) {
	  this.r = r/2;
  } else {
	  this.r = 50;
  }
  this.vel = p5.Vector.random2D();
  this.sides = floor(random(5,15));
//  this.r = random(15,50);
  this.offset = [];


  for(var i = 0; i<this.sides; i++) {
    this.offset[i] = random(-this.r*0.5, this.r*0.5);
  }
  this.render = function() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x,this.pos.y);
    beginShape();
    for(var i = 0 ; i < this.sides; i++) {
      var angle = map(i, 0, this.sides, 0, TWO_PI);
      var x = (this.offset[i]+this.r) * cos(angle);
      var y = (this.offset[i]+this.r) * sin(angle);
      vertex(x, y);

    }
    endShape(CLOSE);
    pop();
  }
  this.breakup = function() {
    var newA = [];
	newA[0] = new Asteroid(this.pos, this.r);
	newA[1] = new Asteroid(this.pos, this.r);
	return newA;
  }
  this.update  = function() {
    this.pos.add(this.vel);
  }
  this.edges = function() {
    if(this.pos.x > (width+this.r))
    {
      this.pos.x = -this.r;
    }else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }

    if(this.pos.y > (height+this.r)) {
      this.pos.y = -this.r;
    }else if(this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}
