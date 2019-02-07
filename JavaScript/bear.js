var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//red rectangle
ctx.beginPath();
ctx.rect(400, 200, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();


//green ellipse
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//stroke
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();