let img1;

function setup() {
    	createCanvas(windowWidth, windowHeight);
        img1 = loadImage('static/QR3.png'); // Load the image
        document.body.style.overflow = 'hidden';
}

function draw(){
image(img1, -30, -30, img1.width, img1.height);

}
