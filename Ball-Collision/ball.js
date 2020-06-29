class Ball{
  constructor(container, color){
      this.container = container;
      this.diameter = 30 ;
      this.x = Math.floor(Math.random() * (600 - this.diameter)) ;
      this.y = Math.floor(Math.random() * (600 - this.diameter));
      this.dy = Math.floor(Math.random() *1)+1;
      this.dx = Math.floor(Math.random() * 1)+1;
      this.color = color;
  }
  
  draw(){
    this.ball = document.createElement('div');
    this.ball.style.position = 'absolute';
    this.ball.style.height = this.diameter + 'px';
    this.ball.style.width = this.diameter + 'px';
    this.ball.style.backgroundColor =  this.color;
    this.ball.style.borderRadius = '50%';
    this.ball.style.bottom = this.dy + 'px';
    this.ball.style.left = this.dx + 'px';
    this.container.appendChild(this.ball);
  }

  proceed(){
    this.x += this.dx;
    this.y += this.dy;
    this.ball.style.bottom = this.y + 'px';
    this.ball.style.left = this.x + 'px';
  }

  getLocation(){
    return [this.diameter, this.x, this.y];
  }
  getVectors(){
    return [this.dx, this.dy];
  }
  setVectors(dx, dy){
    this.dx = dx;
    this.dy = dy;
  }

  borderBarrier() {
    if (this.x > (600 - this.diameter)){
      this.dx = -Math.abs(this.dx);
    }
    if (this.x < 0){
      this.dx = Math.abs(this.dx);
    }
    if (this.y > (600 - this.diameter)){
      this.dy = -Math.abs(this.dy);
    }
    if (this.y < 0){
      this.dy = Math.abs(this.dy);
    }
  }
}

function detectCollision(circle1, circle2){
  let dx = circle1[1] - circle2[1];
  let dy = circle1[2] - circle2[2];
  let distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < (circle1[0]/2) + (circle2[0]/2)) {
      return(true)
  }
}

function collisionHandler(){
  for (i = 0; i < ballNumber; i++)
    for (j = i; j < ballNumber; j++)
      if (i !== j)
        if(detectCollision(ballsArray[i].getLocation(), ballsArray[j].getLocation()))
        {
          ballsArray[i].setVectors(-ballsArray[i].getVectors()[0], -ballsArray[i].getVectors()[1]);
          ballsArray[j].setVectors(-ballsArray[j].getVectors()[0], -ballsArray[j].getVectors()[1]);
        }
}


var box = document.querySelector('.box');

var ballsArray = []
var ballNumber = 10;
for(i= 0; i< ballNumber; i++){
  ball = new Ball(box,'#333');
  ball.draw()
  ballsArray.push(ball);
}

function ballMove(){
  for(i= 0; i<ballNumber; i++){
    ballsArray[i].proceed();
    ballsArray[i].borderBarrier();
  }
  collisionHandler()
  window.requestAnimationFrame(ballMove);
}

ballMove();
