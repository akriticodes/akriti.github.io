class Animation{
  constructor(){
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext("2d");
    this.canvas.width = cnvWidth;
    this.canvas.height = cnvHeight;
    this.columns = [];
    for (var i = 0; i < 15; i++) {
      this.columns.push(new Column(i));
    }

  }
  animate(){
    setInterval(function () {
      spiral.context.fillStyle = "#043a4a";
      spiral.context.fillRect(0, 0, cnvWidth, cnvHeight);
      for (var i = 0; i < 15; i++) {
        spiral.columns[i].update(spiral.context);
      }

    }, 20);
  }
}

var spiral = new Animation()
spiral.animate()