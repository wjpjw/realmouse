var ctx, color = "#123",
    top_offset = 44;

queue().defer(d3.csv, "data/ko1_c.csv").await(lets_draw);

function inspect(msg, object) {
    console.log(msg + JSON.stringify(object, null, 4));
}

function lets_draw(error, data_csv) {
    var canvas = '<canvas id="canvas" width="' + 3500 + '" height="' + 1800 + '"></canvas>';
    $("#content").html(canvas);
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    console.log(data_csv.length);
    var prevline = data_csv[0];
    console.log(prevline);
    data_csv.forEach(function(element) {
        ctx.beginPath();
        // ctx.moveTo();
        //  ctx.lineTo(1000, 1000);
        //  ctx.stroke();
    });

    $("#canvas").drawMouse();
}







// not very relevant: hand drawing feature
$.fn.drawMouse = function() {
    var clicked = false;
    var start = function(e) {
        clicked = true;
        ctx.beginPath();
        ctx.strokeStyle = "#562";
        ctx.lineWidth = 6;
        x = e.pageX;
        y = e.pageY - top_offset;
        ctx.moveTo(x, y);
    };
    var move = function(e) {
        if (clicked) {
            x = e.pageX;
            y = e.pageY - top_offset;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };
    var stop = function(e) {
        clicked = false;
    };
    $(this).on("mousedown", start);
    $(this).on("mousemove", move);
    $(window).on("mouseup", stop);
};