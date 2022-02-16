let img1;

function setup() {
    	createCanvas(windowWidth, windowHeight);
        img1 = loadImage('static/QR1.png'); // Load the image
        document.body.style.overflow = 'hidden';
}

function draw(){
image(img1, 0, 0, img1.width, img1.height);

}
