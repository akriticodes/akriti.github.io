var box = document.createElement('div');
box.style.width='200px';
box.style.height ='300px';
box.style.border = '5px solid #ddd';
box.style.position ='relative';
box.style.margin = '0 auto';
document.body.appendChild(box);

var point = document.createElement('div');
point.style.width='40px';
point.style.height ='40px';
point.style.borderRadius = '50%';
point.style.position ='absolute';
point.style.backgroundColor ="blue";
point.style.margin = '0 auto';
point.style.top = '260px';
point.style.left='40%';
box.appendChild(point);


var y = 260;
var dy = -5;

function draw(){

  y += dy;
  if(y>260){
      dy *=-1;
      y = 260;
  }
  
  if (y<=0){
      dy *= -1;
      y = 0
  }
  
  point.style.top = y + "px";
  window.requestAnimationFrame(draw);
}


window.requestAnimationFrame(draw);