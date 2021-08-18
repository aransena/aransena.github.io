function setup() {
    	frameRate(120);

    background(255, 255, 255);
	createCanvas(windowWidth, windowHeight);

	let a = createA('https://www.aransena.com/','aransena.com');
        a.position(windowWidth/15, windowHeight/20);
        let b = createA('https://www.imperial.ac.uk/human-robotics','imperial.ac.uk/human-robotics');
        b.position(windowWidth/15, windowHeight/20+20);
        let c = createA('https://www.linkedin.com/in/aran-sena-46211842/','linkedin');
        c.position(windowWidth/15, windowHeight/20+40);
        let d = createA('https://github.com/aransena','github.com/aransena');
        d.position(windowWidth/15, windowHeight/20+60);
        let e = createA('https://twitter.com/aransena','twitter.com/aransena');
        e.position(windowWidth/15, windowHeight/20+80);

}

function draw(){
    clear()

        for(let i = 0; i<(650); i++) {
            let t = i;
            strokeWeight(8 * (0.6 + 0.5 * sin(t / 2)));
            stroke((0.5 + sin(0.5 * t / 5 + t/200)*cos(t/10)) * 255, 0, 240);
            fill(0, 240, 240);
            let x = cos(t / 100 + frameCount/180 * sin(frameCount/1000)) * windowWidth / 2 * 0.4+ windowWidth / 2 + 80 * sin(t / 100 + frameCount/100)+50*sin(t/7+2*sin(t/100))+10*cos(t/110);// * sin(frameCount/10);
            let y = sin(t / 100 + frameCount/900) * windowHeight / 2 * 0.4 + windowHeight / 2 + 80 * cos(t / 10) * sin(t / 10 + frameCount/110);
            point(x, y);
            // for(let j=0; j< 1000; j += 100) {
            //     point(j * (windowWidth - x) / windowWidth, j * (windowHeight - y) / windowHeight);
            // }
            // text("Hello",y,x)
        }



}