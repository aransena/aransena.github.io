function setup(){
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	//textFont(Helvetica);
	textSize(windowWidth / 3);
	textAlign(CENTER, CENTER);
}

function draw(){
	let r, g, b;
	r = 255*(sin(Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	g = 255*(sin(2*Math.PI*.33 + Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	b = 255*(sin(2*Math.PI*.66 + Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	//stroke(255-r, 255-g, 255-b);
	//fill(255-r, 255-g, 255-b);
	text("Aran Sena", windowWidth/2, windowHeight/2)
	background(r, g, b);
}
