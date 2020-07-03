class Circle{
  constructor(index, color, x, column){
    this.radius = 5;
    this.color = color;
    this.y = (index) * 12;
    this.x = x;
   
  }

 
  update(ctx, y) {
    
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y + y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    
  }
}

class Column{
  constructor(index){
    this.index = index;
    this.circles = [];
    this.x = 240 - (index) *15
    this.colors = COLORS;
    this.y = index * 5;
    this.negative = false;
    
    for (var i = 0; i < 11; i++) {
      this.circles.push(new Circle(i, COLORS[i], this.x, this.index))
    }
  }

  locate(){
    if (this.negative)
      this.y -= 1;
    else
      this.y += 1;
    if (this.y >70 )
      this.negative = true;
    else if (this.y<0)
      this.negative = false;
      
  }

  update(ctx){
    for (var i = 0; i < 11; i++) {
      this.circles[i].update(ctx, 5 + this.y);
    }
    this.locate();
  }
}