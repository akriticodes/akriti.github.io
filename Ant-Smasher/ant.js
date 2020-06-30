class Ant{
  constructor(container){
      this.container = container;
      this.diameter = 60 ;
      this.x = Math.floor(Math.random() * (600 - this.diameter)) ;
      this.y = Math.floor(Math.random() * (600 - this.diameter));
      this.dy = Math.floor(Math.random() *1)+1;
      this.dx = Math.floor(Math.random())+1;
      this.ant = document.createElement('div');
  }

  draw(){
    this.ant.style.position = 'absolute';
    this.ant.style.height = this.diameter + 'px';
    this.ant.style.width = this.diameter + 'px';
    this.ant.style.backgroundImage = 'url(images/anttt.png)';
    this.ant.style.bottom = this.y + 'px';
    this.ant.style.left = this.x + 'px';
    this.ant.style.backgroundRepeat ='no-repeat';
    this.container.appendChild(this.ant);
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



  antGet(){
    return this.ant;
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


 

  newposition(){
    this.x += 1;
    this.y += 1;
  }

 


  position(){
  return[this.radius, this.x, this.y];
  }

  proceed(){
    this.x += this.dx;
    this.y += this.dy;
    this.ant.style.bottom = this.y + 'px';
    this.ant.style.left = this.x + 'px';
  }
}

 
var box = document.querySelector('.box');
 
var antsArray = [];
var antNumber = 5;

function collisionHandler(){
  for (i = 0; i < antNumber; i++)
    for (j = i; j < antNumber; j++)
      if (i !== j)
        if(detectCollision(antsArray[i].getLocation(), antsArray[j].getLocation()))
        {
          antsArray[i].setVectors(-antsArray[i].getVectors()[0], -antsArray[i].getVectors()[1]);
          antsArray[j].setVectors(-antsArray[j].getVectors()[0], -antsArray[j].getVectors()[1]);
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


for(i= 0; i< antNumber; i++){
  ant = new Ant(box,'#000');
  ant.draw()
  antsArray.push(ant);
  addClick(ant)
}

function addClick(ant){
  ant.antGet().addEventListener('click', function(){
    ant.antGet().remove();
    antsArray = antsArray.filter(item => item !== ant);
    antNumber -= 1;
  });
}

function antMove(){
  for(i= 0; i<antNumber; i++){
    antsArray[i].proceed();
    antsArray[i].borderBarrier();
  }
  collisionHandler()
  window.requestAnimationFrame(antMove);
}

antMove();
