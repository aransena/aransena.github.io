let img1;//, img2;

function setup() {
    	createCanvas(windowWidth, windowHeight);
        img1 = loadImage('static/QR1.png'); // Load the image
        // img2 = loadImage('static/QR2.png'); // Load the image
        document.body.style.overflow = 'hidden';
}

function draw(){
image(img1, -30, -30, img1.width, img1.height);


// translate(img2.width, img2.height)
// rotate(PI);
// image(img2,-windowWidth+img2.width+-30, -windowHeight+img2.height-30, img2.width, img2.height);

}
