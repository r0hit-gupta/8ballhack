// p5 can not be executed the normal "global" way
// Instead a sketch instance has to be manually created
// This is done with the closure below

var sketch = function(p5) {
  // setup canvas
  p5.setup = function() {
    console.log('p5 running');
    var c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    c.style('pointer-events', 'none');
    c.position(190,400);
    p5.clear();
    p5.noFill();
    p5.noLoop();
    p5.stroke(255, 30);
  }
  // draw the guidelines
  p5.draw = function() {
		p5.clear();
    p5.strokeWeight(2);
    p5.stroke(255, 30);
		p5.line(0,0, p5.mouseX, p5.mouseY);
		p5.line(285,0, p5.mouseX, p5.mouseY);
		p5.line(570,0, p5.mouseX, p5.mouseY);
		p5.line(0,274, p5.mouseX, p5.mouseY);
		p5.line(285,274, p5.mouseX, p5.mouseY);
		p5.line(570,274, p5.mouseX, p5.mouseY);
    p5.stroke(255, 100);
		p5.ellipse(p5.mouseX, p5.mouseY, 20);
	}
  // check if SHIFT key is pressed to change the layout
  p5.mouseMoved = function() {
    if(p5.keyIsDown(p5.SHIFT)){
      p5.draw();
    }
  }

}

// The above function closure is passed into a p5 object constructor
// this starts the sketch.
var myp5 = new p5(sketch);
