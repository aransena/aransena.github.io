let img1;

function setup() {
    	createCanvas(windowWidth, windowHeight);
        //img1 = loadImage('static/QR1.png'); // Load the image
        var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "1,"+document.documentElement.clientWidth/document.documentElement.clientHeight,
        width: document.documentElement.clientWidth*0.25,
        height: document.documentElement.clientWidth*0.25,
        margin: 5px,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
        document.body.style.overflow = 'hidden';
}

function draw(){
//image(img1, 0, 0, img1.width, img1.height);
    //image(img1, 0, 0, document.documentElement.clientWidth*0.25, document.documentElement.clientWidth*0.25 * img1.width/img1.height);

}
