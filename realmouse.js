queue().defer(d3.csv, "https://raw.githubusercontent.com/wjpjw/realmouse/master/data/ko1_c.csv").await(lets_draw);

function lets_draw(error, data_csv) {
    var canvas = '<canvas id="canvas" width="' + 3500 + '" height="' + 1800 + '"></canvas>';
    $("#content").html(canvas);
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeStyle = "rgba(255,12,12,0.1)";
    ctx.lineWidth = 30;
    var prevline = data_csv[0];
    data_csv.forEach(function(curline) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,252,148,0.02)";
        ctx.lineWidth = 600;
        ctx.moveTo(100 * prevline.x, 100 * prevline.y);
        ctx.lineTo(100 * curline.x, 100 * curline.y);
        ctx.stroke();


        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,12,12,0.02)";
        ctx.lineWidth = 300;
        ctx.moveTo(100 * prevline.x, 100 * prevline.y);
        ctx.lineTo(100 * curline.x, 100 * curline.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,108,12,0.01)";
        ctx.lineWidth = 100;
        ctx.moveTo(100 * prevline.x, 100 * prevline.y);
        ctx.lineTo(100 * curline.x, 100 * curline.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "rgba(165,0,0,0.9)";
        ctx.lineWidth = 1;
        ctx.moveTo(100 * prevline.x, 100 * prevline.y);
        ctx.lineTo(100 * curline.x, 100 * curline.y);
        ctx.stroke();
        prevline = curline;
    });

}