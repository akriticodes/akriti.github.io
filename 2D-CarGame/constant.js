const WIDTH=300;
const HEIGHT=500;
canvas=document.getElementById('canvas');
canvas.width=WIDTH;
canvas.height=HEIGHT;
var CAR1=new Image();
var imgPath="./car2.gif"
CAR1.src=imgPath;
var CAR2=new Image();
var imgPath2="./car1.gif"
CAR2.src=imgPath2;
var BACK=new Image();
BACK.src="background.jpg"
const FRONT=new Image();
FRONT.src="car.png";
let updatecar=[];
let ctx=canvas.getContext('2d');

ctx.drawImage(BACK,0,0,WIDTH,HEIGHT);
var backgroundSpeed=0;
ctx.lineDashOffset=+backgroundSpeed;
ctx.strokeStyle="#fff";
ctx.stroke();
let point=new Audio('ppoint.wav');
let hit=new Audio('ddie.wav');

