var t;
let gui;
let b;
let cx, cy;
function setup(){
	frameRate(120);
	// colorMode(HSB, 100);
	background(255, 255, 255);
	createCanvas(windowWidth, windowHeight);
	textSize(windowWidth / 10);
	textAlign(CENTER, CENTER);
	t = 0;

	gui = createGui();
	b = createCheckbox("cb", 50, 50);
	cx = b.x;
	cy = b.y;

}

function draw(){

	clear();


	if(b.isPressed){
		b.x = random(0, windowWidth);
		b.y = random(0, windowHeight);
		cx = b.x;
		cy = b.y;
	}
	if(b.val) {
		background(100);
		b.w = 50+10*(0.5+ 0.5*sin(frameCount/10));
		b.h = 50+10*(0.5+ 0.5*sin(frameCount/10));
		b.x = cx - b.w/2;
		b.y = cy - b.h/2;

	}
	else{
		b.x = cx;
		b.y = cy;
		background(20);
	}

	drawGui();

	let x, y, offset_x, offset_y, amplitude_x, amplitude_y, frequency_x, frequency_y, phase_x, phase_y;
	let R = random(1,10)
	for(let i = 0; i < 1000; i++){
		strokeWeight(10*(0.5+0.5*sin(i/1000)));

		t = t + 0.000001;
		offset_x = windowWidth/2;
		offset_y = windowHeight/2;
		amplitude_x = 1000;
		amplitude_y = windowHeight;
		frequency_x = i/100000;//0.001;
		frequency_y = 0.01;
		phase_x = i%101;
		phase_y = 0;
		x = offset_x + amplitude_x * sin(2 * Math.PI * frequency_x * (i+t) + phase_x);

		y = offset_y + amplitude_y * cos(2 * Math.PI * frequency_y * (i+t) + phase_y);
		// for(let r = 1; r<R; r++) {
			x = offset_x + amplitude_x * sin(2 * Math.PI * frequency_x  * x + phase_x);
			y = offset_y + amplitude_y * cos(2 * Math.PI * frequency_y * y + phase_y);
		// }
		stroke(240,240,240);
		fill(240, 240,240);
		point(x,y);


	}


	// let r, g, b, ro, go, bo, offsetx, offsety, M;
	// M = 100;
	// for(let n = 0; n < M; n++) {
	// 	// strokeWeight(10);
	//
	//
	// 	let N = 30;
	// 	let freq, amp, phase, off, wave, t, T, step, start;
	// 	freq = 0.001 + n/10000;
	// 	amp = 40.0;
	// 	wave = 1.0;
	// 	off = ((n*1.5)*(windowHeight-amp*2)) / M;
	// 	phase = n*10;//0.0;
	// 	T = (n%101+1)*100.0;
	// 	step = windowWidth / T;
	// 	for (let i = 0; i < N; i++) {
	// 		stroke(i+ 0.1 * n % 100, 80, 100);
	// 		fill(i + 0.1 * n % 20, 80)
	// 		t = ((frameCount) % windowWidth) * step - i * step;
	// 		let x = t % (windowWidth + N);//step*(frameCount-i)%step;
	// 		let y = off + amp * sin(2 * Math.PI * freq * t + phase);
	// 		strokeWeight(10 - (i / N) * 10);
	// 		point(x, y);
	// 	}
	// }


}
