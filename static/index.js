let rand = [];
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
        let f = createA('https://scholar.google.co.uk/citations?user=PmpjruUAAAAJ&hl=en#','google scholar');
        f.position(windowWidth/15, windowHeight/20+100);
	
	let g = createA('https://aransena.github.io/qr1','QR 1');
        g.position(windowWidth/15, windowHeight/20+140);
	let h = createA('https://aransena.github.io/qr2','QR 2');
        h.position(windowWidth/15, windowHeight/20+160);
	let i = createA('https://aransena.github.io/qr3','QR 3');
        i.position(windowWidth/15, windowHeight/20+180);
	let j = createA('https://aransena.github.io/qr4','QR 4');
        j.position(windowWidth/15, windowHeight/20+200);
	
        for(let i = 0; i<50; i++) {
            rand.push(Math.floor(Math.random() * 1000));
        }

}

function draw(){
    clear()

        for(let j = 0; j< rand.length; j++) {
            let N = 20+floor(rand[j]/1000*40);
            for (let i = rand[j]; i < rand[j] + N; i++) {
                let t = frameCount + i;
                strokeWeight(N/6 * (1.5 + 0.5 * sin(t / 2)));
                stroke((0.5 + sin(0.5 * t + t / 20)+i)* 255, i%255+(N/1000)*255, i%255);
                fill(0, 240, 240);
                let x = cos(rand[j] + t / 100 + t / (10+N*10) * sin((t / (1000+N*3))) + N/50) * windowWidth / 2 * 0.4 + windowWidth / 2 + windowWidth / windowHeight * sin(t / (100+N*100) + rand[j]/100+ (i/N)*2*Math.PI*N/500) + windowHeight / windowWidth * 100 * sin(t / (70+N*10+ (i/N)*2*Math.PI*N/500) + 2 * rand[j]/100*sin(t / 2000)) + windowHeight / windowWidth * 100 * cos(t / (339+N));// * sin(frameCount/10);
                let y = sin(rand[j]+ t / (100-N*10) ) * windowHeight / 2 * 0.4 + windowHeight / 2 + windowWidth/windowHeight/(rand[j]+1) * sin(t/300) * windowHeight/100 * cos(t / 100) * sin(t / 1000 + (i/N)*2*Math.PI*N/500) + t/100*cos(t/(rand[j]+1+N*10));
                point(x, y);
                // for(let j=0; j< 1000; j += 100) {
                //     point(j * (windowWidth - x) / windowWidth, j * (windowHeight - y) / windowHeight);
                // }
                // text("Hello",y,x)
            }
        }

        // for(let i = rand; i<rand+N; i++) {
        //     let t = frameCount+i;
        //     strokeWeight(15 * (1.5 + 0.5 * sin(t / 2)));
        //     stroke((0.5 + sin(0.5 * t / 5 + t/200)*cos(t/10)) * 255, 0, 240);
        //     fill(0, 240, 240);
        //     let x = cos(t / 100 + t/180 * sin((t/1000))) * windowWidth / 2 * 0.4+ windowWidth / 2 + windowWidth/windowHeight * sin(t / 100 )+windowHeight/windowWidth*100*sin(t/70+2*sin(t/2000))+windowHeight/windowWidth*100*cos(t/330);// * sin(frameCount/10);
        //     let y = sin(t / 100) * windowHeight / 2 * 0.4 + windowHeight / 2;// + windowWidth/windowHeight * sin(t/30) * windowHeight/10 * cos(t / 100 + t%N/50) * sin(t / 100 + t/110) + 10*t/100*cos(t/10);
        //     point(x, y);
        // }



}
