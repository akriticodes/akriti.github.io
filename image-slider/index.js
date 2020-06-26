var IMAGE_WIDTH = 200;

var imageWrapper = document.querySelector('.carousel-image-wrapper');
var currentIndex = 0;

function slideRight(){
  currentIndex++;
  if (currentIndex > 2) currentIndex = 0;
  endPosition = currentIndex * -IMAGE_WIDTH
  animate()

}


function slideLeft(){
  currentIndex--;
  if (currentIndex < 0) currentIndex = 2;
  endPosition = -(currentIndex * +IMAGE_WIDTH)
  animate()
}

var PicturedContainer = document.querySelector(".carousel-container")


var leftPart = document.createElement('div');
leftPart.style.position = "absolute";
leftPart.style.left = 0 + "px";
leftPart.style.top = 80 + "px";
leftPart.style.width = 15 + "px";
leftPart.style.height = 15 + "px";
leftPart.style.backgroundColor = "white";
leftPart.style.backgroundImage = "url(./images/left-arrow.png)";
leftPart.style.backgroundRepeat= "no-repeat";
PicturedContainer.appendChild(leftPart);



var rightPart = document.createElement('div');

rightPart.style.position = "absolute";
rightPart.style.right = 0 + "px";
rightPart.style.top = 80 + "px";
rightPart.style.width = 15 + "px";
rightPart.style.height =15 + "px";
rightPart.style.backgroundColor = "white";
rightPart.style.backgroundImage = "url(./images/right-arrow.png)" ;

rightPart.style.backgroundRepeat= "no-repeat";
PicturedContainer.appendChild(rightPart);

leftPart.addEventListener('click',()=>{
  slideLeft();
})

rightPart.addEventListener('click',()=>{
  slideRight();
})




var Slider =document.createElement('ul');


Slider.style.position ="absolute";
Slider.style.bottom = 0 + "px";
Slider.style.left = 50 + "px";
Slider.style.width = 100 + "px";
Slider.style.height = 20 + "px";
PicturedContainer.appendChild(Slider);


function Click(i){
  endPosition = -(i * IMAGE_WIDTH);
  animate()
}
function createBullet(i){
  dots = document.createElement('li');

  dots.style.display = 'inline-block';
  dots.style.marginLeft = 20+ 'px';
  dots.style.width = 10 + "px";
  dots.style.height = 10 + "px";
  dots.style.backgroundColor = "white";
  dots.style.borderRadius  = '50%';
  Slider.appendChild(dots);
  dots.addEventListener('click',()=>{
    Click(i)
  })
}

for (i = 0; i <= 2 ; i++){
  createBullet(i)
}

var startPosition = 0;
 endPosition = 0 ;


  
function animate(){
 
  if (startPosition>endPosition)
    startPosition-= 20
  else
  startPosition+= 20
  console.log(startPosition, endPosition)
  imageWrapper.style.left = startPosition + 'px';
  if (startPosition != endPosition)
    window.requestAnimationFrame(animate)
  
}






