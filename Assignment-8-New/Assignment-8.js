
function Plot(x, y, container){
  var that = this;
  this.x = x;
  this.y = y;
  this.container = container;
  this.color = '#29c'

  this.getX = function(){
    return this.x;
  }

  this.setX = function(x){
    this.x = x;
  }

  this.getY = function(){
    return this.y;
  }

  this.setY = function(y){
    this.y = y;

  }

 this.element = document.createElement('div');
 this.element.style.position = 'absolute';
 this.element.style.width ='20px'
 this.element.style.height ='20px';
 this.element.style.borderRadius ='20px';
 this.element.style.background = this.color;
 this.element.style.top = this.y + 'px';
 this.element.style.left = this.x + 'px';
 


 this.render = function(){
   this.container.appendChild(this.element)
 }

 this.setColor = function(color){
   this.color = color;
   this.element.style.background = this.color;
 }

 this.element.addEventListener ('click', function(){
    that.setColor('#292');
 });
}




var plots =[
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 80, y: 20},
  { x: 100, y: 40 },
  { x: 120, y: 80 },
  { x: 100, y: 100 },
  { x: 200, y: 220 },
  { x: 200, y: 190 },
  { x: 250, y: 250 }

];

//console.log(plots);

var plot = new Plot(10, 20, document.body);

plots.forEach(point =>{
  var plot = new Plot(point.x, point.y, document.body);

  plot.render();
})



//var plot = new Plot(10, 20, document.body);



