function carouselMaker(PicturedContainer){ 
  var self = this;
  this.IMAGE_WIDTH = 200;
  this.PicturedContainer = PicturedContainer
  this.imageWrapper = this.PicturedContainer.querySelector('.carousel-image-wrapper');
  this.currentIndex = 0;
  this.holderTime = parseFloat(this.PicturedContainer.getAttribute("holderTime"))
  if (!this.holderTime){
    this.holderTime = 2;
  }
  this.animateTime = parseFloat(this.PicturedContainer.getAttribute("animateTime"))
  if (!this.animateTime){
    this.animateTime = 0.5;
  }
  
 
  this.createSides = function(){
    this.leftPart = document.createElement('div');
    this.leftPart.style.position = "absolute";
    this.leftPart.style.left = 0 + "px";
    this.leftPart.style.top = 80 + "px";
    this.leftPart.style.width = 15 + "px";
    this.leftPart.style.height = 15 + "px";
    this.leftPart.style.backgroundColor = "white";
    this.leftPart.style.backgroundImage = "url(./images/left-arrow.png)";
    this.leftPart.style.backgroundRepeat= "no-repeat";
    this.PicturedContainer.appendChild(this.leftPart);



    this.rightPart = document.createElement('div');

    this.rightPart.style.position = "absolute";
    this.rightPart.style.right = 0 + "px";
    this.rightPart.style.top = 80 + "px";
    this.rightPart.style.width = 15 + "px";
    this.rightPart.style.height =15 + "px";
    this.rightPart.style.backgroundColor = "white";
    this.rightPart.style.backgroundImage = "url(./images/right-arrow.png)" ;

    this.rightPart.style.backgroundRepeat= "no-repeat";
    this.PicturedContainer.appendChild(this.rightPart);

    this.slideRight =  function(){
      self.holdTick = 0;
      self.currentIndex++;
      if (self.currentIndex > 2) self.currentIndex = 0;
      self.endPosition = self.currentIndex * -self.IMAGE_WIDTH
      self.animate()
  
    }
  
  
    this.slideLeft =function (){
      self.holdTick = 0;
      self.currentIndex--;
      if (self.currentIndex < 0) self.currentIndex = 2;
      self.endPosition = -(self.currentIndex * +self.IMAGE_WIDTH)
      self.animate()
    }

    this.leftPart.addEventListener('click',()=>{
      self.slideLeft();
    })

    this.rightPart.addEventListener('click',()=>{
      self.slideRight();
    })
  }
  this.createSides()




  this.Slider =document.createElement('ul');


  this.Slider.style.position ="absolute";
  this.Slider.style.bottom = 0 + "px";
  this.Slider.style.left = 50 + "px";
  this.Slider.style.width = 100 + "px";
  this.Slider.style.height = 20 + "px";
  this.PicturedContainer.appendChild(this.Slider);


  this.Click = function(i) {
    this.endPosition = -(i * this.IMAGE_WIDTH);
    this.animate()
  }
  this.createBullet = function(i) {
    this.dots = document.createElement('li');


    this.dots.style.display = 'inline-block';
    this.dots.style.marginLeft = 20+ 'px';
    this.dots.style.width = 10 + "px";
    this.dots.style.height = 10 + "px";
    this.dots.style.backgroundColor = "white";
    this.dots.style.borderRadius  = '50%';
    this.Slider.appendChild(this.dots);
    this.dots.addEventListener('click',()=>{
      this.Click(i)
    })
  }

  for (i = 0; i <= 2 ; i++){
    this.createBullet(i)
  }

  this.startPosition = 0;
  this.endPosition = 0 ;


    
  this.animate = function(){
    console.log(60/self.animateTime)
    if (Math.abs(self.startPosition - self.endPosition)<60*self.animateTime)
      self.startPosition = self.endPosition;
    else if (self.startPosition>self.endPosition)
      self.startPosition-= self.PicturedContainer.clientWidth/(self.animateTime * 60); 
    else
      self.startPosition+=  self.PicturedContainer.clientWidth/(self.animateTime * 60); 
  
    self.imageWrapper.style.left = self.startPosition + 'px';
    
    if (self.startPosition != self.endPosition)
    
      window.requestAnimationFrame(self.animate)

    
  }

  this.holdTick = 0;
  this.holdImg = function(){
    self.holdTick +=1;
    if (self.holdTick > self.holderTime*60){
      self.holdTick =0;
      self.slideRight();
    }
    window.requestAnimationFrame(self.holdImg);
  }

 this.holdImg();
}


var PicturedContainer = document.getElementsByClassName("carousel-container")


function createCarosel(PicturedContainer) {
  var carouselWindow = {}
  for (var i = 0; i < PicturedContainer.length; ++i) {
    carouselWindow[i] = new carouselMaker(PicturedContainer[i])
  }
  return carouselWindow;
}

createCarosel(PicturedContainer);