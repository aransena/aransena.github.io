function setup(){
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	
	background(255*(sin(Math.PI*2*(frameRate/60))*0.5 + 0.5));
}
