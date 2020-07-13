class Layer{
  constructor(name, index ){
    this.img;
    this.imageSize;
    this.text;
    this.upIcon;
    this.eyeIcon;
    this.painting = false;
    this.downIcon;
    this.name = name;
    this.index = index;
    this.visible = true;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.layerIndicatorDiv;
    this.flipped = false;
    this.doodles = [];
    this.drawPoints = [];
    this.AddlayerstoList();
    this.InitializeLayerCanvas();
    this.addListenersInLayerDiv(this.index);
  }

  AddlayerstoList(){
    let node = document.querySelector(".layer-list");   
    this.layerIndicatorDiv = document.createElement("div");
    this.layerIndicatorDiv.classList.add("layerDiv");
    let eyeDiv = document.createElement("div");
    eyeDiv.classList.add("eye-icon");
    let aDiv = document.createElement("a");
    aDiv.href = "#";
    this.eyeIcon = document.createElement("i");
    this.eyeIcon.classList.add("fa");
    this.eyeIcon.classList.add("fa-eye");
    aDiv.appendChild(this.eyeIcon);
    eyeDiv.appendChild(aDiv);
    this.layerIndicatorDiv.appendChild(eyeDiv);

    let upDiv = document.createElement('div');
    upDiv.classList.add("up-icon");
    this.upIcon = document.createElement("i");
    this.upIcon.classList.add("fa");
    this.upIcon.classList.add("fa-level-up");
    upDiv.appendChild(this.upIcon);
    this.layerIndicatorDiv.appendChild(upDiv);

    let downDiv = document.createElement('div');
    downDiv.classList.add("down-icon");
    this.downIcon = document.createElement("i");
    this.downIcon.classList.add("fa");
    this.downIcon.classList.add("fa-level-down");
    downDiv.appendChild(this.downIcon);
    this.layerIndicatorDiv.appendChild(downDiv);
    
    this.textDiv = document.createElement("div");
    this.textDiv.classList.add("layer-title");
    this.textDiv.innerHTML = this.name;
    this.layerIndicatorDiv.appendChild(this.textDiv);
    node.appendChild(this.layerIndicatorDiv);  
    
  }


  InitializeLayerCanvas(){//canvas=rectangle
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();
  } 
  
  AddImageToLayers(img, imgSize = [canvasWidth, canvasHeight]){
    this.img = img;
    this.imageSize = imgSize;
  }

  flipImage(){
    if (this.flipped){
      this.flipped = false;
    }
    else{
      this.flipped = true;
    }
  }

  doodle(e){
    if (!this.painting){
      return;
    }
    this.doodles[this.doodles.length-1].push([e.clientX-50, e.clientY-56]);
   
  }

  addText(text){
    this.text = text;
    ctx.font = "20px Arial";
  }

  changeVisibility(){
    if(this.visible){
      this.visible = false;
      this.eyeIcon.classList.remove('fa-eye')
      this.eyeIcon.classList.add('fa-eye-slash')
    }
    else{
      this.visible = true;
      this.eyeIcon.classList.remove('fa-eye-slash')
      this.eyeIcon.classList.add('fa-eye')
    }
  }

  addListenersInLayerDiv(index){
    var that = this;
    this.eyeIcon.addEventListener('click', function () {
      console.log(layersArray);
      layersArray[that.index].changeVisibility();
      updateScreen();
    });
    this.upIcon.addEventListener('click', function () {
      if (that.index !== 0) {
        swapLayer([that.index, that.index - 1]);
      }
      updateScreen();
    });
    this.downIcon.addEventListener('click', function () {
      if (that.index !== layersArray.length - 1) {
        swapLayer([that.index, that.index + 1]);
      }
      updateScreen();
    });

  }


  draw(){
    if(this.visible){
      if(this.flipped){
        ctx.save();
        ctx.scale(-1,1);
        ctx.fillStyle = '#ffffff'
        if(this.img)
          ctx.drawImage(this.img, 0 - canvasWidth , 0, this.imageSize[0], this.imageSize[1]);
        if(this.text)
          ctx.fillText(this.text, 10 - ctx.measureText(this.text).width, 50);
        
        ctx.restore()
        if(this.doodles){
          this.doodles.forEach(function(drawPoints){
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "white";
            drawPoints.forEach(function(point){
              ctx.lineTo(canvasWidth - point[0], point[1]);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(canvasWidth - point[0], point[1]);
            })
          })
        }
      }
      else{
        ctx.fillStyle = '#ffffff'
        if(this.img)
          ctx.drawImage(this.img, 0 , 0, this.imageSize[0], this.imageSize[1]);
        if(this.text)
          ctx.fillText(this.text, 10, 50);
        if(this.doodles){
          this.doodles.forEach(function(drawPoints){
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "white";
            drawPoints.forEach(function(point){
              ctx.lineTo(point[0],point[1]);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(point[0],point[1]);
            })
          })
        }
      }
    }
  }
}


