var x = 12.5;
var xspeed = 10
var yspeed = 5
var y = 10;

var jazzy;

function preload() {
  jazzy = loadSound("jazzy.mp3");
}


function setup() {
  createCanvas(800,500);
  
  
}

function draw() {
  background(255);
  
  displayBall();
  moveBall();
  
  if(y > 790 || y < 12.5) {
   
  yspeed = -yspeed;
  } 
  
  
  function displayBall() {
  fill(125);
  ellipse(x,y,25,25);
  }
  
  function moveBall() {
  x = x + xspeed;
  y = y + yspeed;
  
  if(x > 800 || x < 12.5) {
    
    xspeed = -xspeed; 
    jazzy.play();
  }
  if (y > 500 || y < 0) {
	 	  yspeed = -yspeed;
	 	  jazzy.play();
  	}
  }
  
  
}