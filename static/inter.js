function setup(){
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	//textFont(Helvetica);
	textSize(windowWidth / 10);
	textAlign(CENTER, CENTER);
}

function draw(){	
	let r, g, b, ro, go, bo, offset;
	r = 255*(sin(Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	g = 255*(sin(2*Math.PI*.33 + Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	b = 255*(sin(2*Math.PI*.66 + Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	background(r, g, b);
	offset = (sin(Math.PI*2*(frameCount/100)%60)*0.5 + 0.5)*5;
	ro = 255*(sin(Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	go = 255*(sin(2*Math.PI*.33 + 2*Math.PI/9 + Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	bo = 255*(sin(2*Math.PI*.66 + 2*Math.PI/9 + Math.PI*2*((frameCount/1000)%60))*0.5 + 0.5);
	stroke(255-ro, 255-go, 255-bo);
	fill(255-ro, 255-go, 255-bo);
	text("Aran Sena", windowWidth/2 + offset*10, windowHeight/2 + offset*10)

	i = 0;
	stroke(255-r, 255-g, 255-b);
	fill(255-r, 255-g, 255-b);
	text("Aran Sena", windowWidth/2 + i*10, windowHeight/2 + i*10)


}
