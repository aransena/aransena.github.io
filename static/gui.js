var plot_i, seed, plot, plot2, points, points2;
const start = Date.now();
var ws_host, socket, ws_data;
function setup(){
        ws_host = '192.168.1.165:5682';
        socket = new WebSocket('ws://' + ws_host);
        socket.onmessage = readMessage;


        frameRate(120);

        background('rgba(5,100,3,0.1)');
        createCanvas(windowWidth, windowHeight);

        // Prepare the points for the plot
        points = [];
        points2 = [];
        seed = 100 * random();



        // Create a new plot and set its position on the screen
        plot = new GPlot(parent);
        // plot2 = new GPlot(parent);
        plot.setPos(windowWidth * 0.1, windowHeight * 0.1);
        plot.setMar(0,0,0,0)
        plot.setDim(windowWidth*0.8, windowHeight/3)
        // plot2.setPos(plot.getPos());
        // plot2.setMar(plot.getMar());
        // plot2.setDim(plot.getDim());

        // Set the plot title and the axis labels
        plot.getXAxis().setAxisLabelText("Time");
        plot.getYAxis().setAxisLabelText("y axis");
        plot.setTitleText("sin(x)");
        var c = color(5,100,3);
        plot.setLineColor(c);
        plot.setPointColor(c);
        // c = color(5,200,3);
        // plot2.setLineColor(c);
        // plot2.setPointColor(c);

        var bgc = color('rgba(5,100,3,0.1)');
        // plot.setBoxBgColor(bgc);
        // plot.setYLim(0,100)
        // plot2.setYLim(0,100)

        // plot2.setBoxBgColor(bgc);
        // plot.setYLim(0,100)
        plot_i = 0;

        // while(socket.readyState!=1){}
        // noLoop();
}

function draw(){
    clear();



    // for (var i = 0; i < 100; i++) {
    // if(frameCount %10 == 0){
    //         var t = (Date.now() - start)/1000;
    //         points[plot_i] = new GPoint(t, 10 * noise(0.1 * plot_i + seed));
    //         points2[plot_i] = new GPoint(t, 100 * noise(0.1 * plot_i + seed));
    //         plot_i = plot_i + 1;
    //     }
    plot.setPoints(points.slice(max(plot_i-100,0)));
    // plot2.setPoints(points2.slice(max(plot_i-100,0)));

     // Draw it!

    plot.defaultDraw();
    // plot2.beginDraw();
    // plot2.drawPoints();
    // plot2.drawLines();
    // plot2.drawYAxis();
    // plot2.endDraw();


}

function readMessage(event){
    var msg = event.data; // read data from the onmessage event
    console.log(msg);
    var t = (Date.now() - start)/1000;
    points[plot_i] = new GPoint(t, Number(msg));
    plot_i = plot_i + 1;
}