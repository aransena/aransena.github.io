let min_r, s_prev, start, s_milli;
function setup(){
    frameRate(30)
    background(255, 255, 255);
	createCanvas(windowWidth, windowHeight);
    strokeWeight(10);
    stroke(0, 0, 240);
    fill(0, 240, 240);
    let h,w;
    h = windowHeight;
    w = windowWidth;
	 for(let s=0; s<60; s++){
        let rad = ((s*(360/60))*2*Math.PI)/(360);
        min_r = min(w/2,h/2);
        let sx = w/2 + min_r*0.8*sin(rad)
        let sy = h/2 + min_r*0.8*cos(rad)
        s_milli = millis();
        point(sx, sy)
    }
    s_prev = second();
	 start = millis();
}

function draw(){
    clear();


    strokeWeight(10);
    stroke(0, 240, 0);
    fill(0, 240, 240);

    let h,w;
    h = windowHeight;
    w = windowWidth;

    circle(w/2,h/2,min_r*0.79*2)

    let s_curr = second();
    if(s_curr !== s_prev){
        s_milli = millis();
        stroke(250, 0, 240);
        fill(0, 240, 240);

    }
    s_prev = s_curr;
    let milli = s_curr*1000.00 + millis()-s_milli;
    let s_rad = milli*(360/60000)*2*Math.PI/360;

    x = w/2 + min_r*0.79*cos(s_rad);//+ 2*cos(millis()/30);
    y = h/2 + min_r*0.79*sin(s_rad);//+ 2*sin(millis()/30);
    // console.log(millis()- s_milli);
    point(x, y)
    strokeWeight(10*(0.6+0.5*sin(milli/150)));
    line(w/2, h/2, x, y);
    strokeWeight(10);
}