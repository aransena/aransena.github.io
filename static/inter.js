function setup(){
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	let r, g, b;
	r = 255*(sin(Math.PI*2*(frameCount/60))*0.5 + 0.5);
	g = 255*(sin(Math.PI*.33 + Math.PI*2*(frameCount/60))*0.5 + 0.5);
	b = 255*(sin(Math.PI*.66 + Math.PI*2*(frameCount/60))*0.5 + 0.5);
	background(r, g, b);
}
