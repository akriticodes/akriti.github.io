function box(width,height,bgColor, container){
  var self = this;
  this.width = width;
  this.height = height;
  this.bgColor = bgColor;
  this.container = container;

  console.log(width,height,bgColor, container)
  this.element = document.createElement('div');
  this.element.style.height = this.height + 'px';
  this.element.style.width= this.width+ 'px';
  this.element.style.border = '5px solid #ddd';
  this.element.style.position ='relative';
  this.element.style.margin = '0 auto';
  this.element.style.float = 'left';
  this.element.style.backgroundColor = this.bgColor;

  this.getBox = function(){
    return(this.element)
  }

  this.getHeight = function(){
    return(this.height)
  }

  this.render = function(){
    this.container.appendChild(this.element);
  }


}

function Ball(radius,box,color){
  var self = this;
  this.radius = radius;
  this.box = box;
  this.color = color;
 

  this.circle = document.createElement('div');
  this.circle.style.borderRadius = '50%';
  this.circle.style.height = (radius*2) + 'px';
  this.circle.style.width = (radius*2) + 'px';
  this.circle.style.position = "absolute";
  this.circle.style.backgroundColor = this.color;
  this.circle.bottom = 0;
  this.circle.left='40%';
  console.log(this.color)
  this.y = this.box.getHeight();
  
  this.dy = -8;
  this.move = function(){
    this.draw = function(){
      //
      self.y += self.dy;
      console.log(self.y)
      if(self.y>self.box.getHeight()){
          self.dy =-1;
          self.y = self.box.getHeight();
      }
      
      if (self.y<=0){
        self.dy = 1;
        self.y = 0
      }
      
      self.circle.style.bottom = self.y + "px";
      window.requestAnimationFrame(self.draw);
    }
    window.requestAnimationFrame(self.draw);
  }
this.render = function(){
  this.box.getBox().appendChild(this.circle);
  console.log(this.circle)
}
}


list = [
  {
    'boxWidth' : 200,
    'boxHeight': 200,
    'boxColor':"blue",
    'ballRadius':20,
    'ballColor':"green",
  },
  {
    'boxWidth' : 100,
    'boxHeight': 100,
    'boxColor':"yellow",
    'ballRadius':10,
    'ballColor':"red",
  },
  {
    'boxWidth' : 200,
    'boxHeight': 200,
    'boxColor':"black",
    'ballRadius':20,
    'ballColor':"pink",
  },
  {
    'boxWidth' : 100,
    'boxHeight': 100,
    'boxColor':"purple",
    'ballRadius':10,
    'ballColor':"white",
  },
  {
    'boxWidth' : 200,
    'boxHeight': 200,
    'boxColor':"yellow",
    'ballRadius':20,
    'ballColor':"white",
  },
]

list.forEach(function(elements){
  var block = new box(elements.boxWidth,elements.boxHeight,elements.boxColor, document.body);
  block.render();
  var point = new Ball(elements.ballRadius, block, elements.ballColor);
  point.render();
  point.move();
});
