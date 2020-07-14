class Layer{
  constructor(name, index ){
    this.img;
    this.text;
    this.upIcon;
    this.eyeIcon;
    this.downIcon;
    this.imageSize;
    this.name = name;
    this.doodles = [];
    this.rotation = 0;
    this.positionX = 0;
    this.positionY = 0;
    this.index = index;
    this.visible = true;
    this.drawPoints = [];
    this.moveing = false;
    this.flipped = false;
    this.painting = false;
    this.AddlayerstoList();
    this.layerIndicatorDiv;
    this.layerIndicatorDiv;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.InitializeLayerCanvas();
    this.addListenersInLayerDiv(this.index);
  }

  AddlayerstoList(){ 
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
    this.upIcon.classList.add("fa-level-down");
    upDiv.appendChild(this.upIcon);
    this.layerIndicatorDiv.appendChild(upDiv);

    let downDiv = document.createElement('div');
    downDiv.classList.add("down-icon");
    this.downIcon = document.createElement("i");
    this.downIcon.classList.add("fa");
    this.downIcon.classList.add("fa-level-up");
    downDiv.appendChild(this.downIcon);
    this.layerIndicatorDiv.appendChild(downDiv);
    
    this.textDiv = document.createElement("div");
    this.textDiv.classList.add("layer-title");
    this.textDiv.innerHTML = this.name.slice(0, 15);
    this.layerIndicatorDiv.appendChild(this.textDiv); 
  }


  InitializeLayerCanvas(){//canvas= transparent rectangle
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();
  } 
  
  AddImageToLayers(img, imgSize){
    this.img = img;
    this.imageSize = imgSize;
  }

  rotateImage(){
    ctx.save(); 
    this.rotation = Math.PI/2;
    ctx.translate(this.width/2, this.height/2);
    ctx.rotate(this.rotation);
    ctx.restore();
  }

  flipImage(){
    if (this.flipped){
      this.flipped = false;
    }
    else{
      this.flipped = true;
    }
  }

  resizeLayer(newWidth, newHeight ){
    if (this.img){
      if(newWidth)
        this.imageSize[0] = newWidth;
      if(newHeight)
        this.imageSize[1] = newHeight;
    }
  }

  doodle(e){
    if (!this.painting){
      return;
    }
    this.doodles[this.doodles.length-1].push([e.clientX-50, e.clientY-56]);
   
  }

  move(e){
    if(!this.moveing){
      return;
    }
    if (this.img){
      this.positionX = e.clientX - this.imageSize[0]/2 - 60;
      this.positionY = e.clientY - this.imageSize[1]/2 - 60;
    }
    if(this.text){
      this.positionX = e.clientX - ctx.measureText(this.text).width/2 - 40;
      this.positionY = e.clientY - 100;
    }
  }
  addText(text){
    this.textDiv.innerHTML = text.slice(0, 15);
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
    // if(this.rotation !== 0){
    //   //  
    // }
    if(this.visible){
      if(this.flipped){
        ctx.save();
        ctx.scale(-1,1);
        ctx.fillStyle = '#ffffff'
        if(this.img)
          ctx.drawImage(this.img, -this.positionX - this.imageSize[0], this.positionY , this.imageSize[0], this.imageSize[1]);
        if(this.text)
          ctx.fillText(this.text, -this.positionX + 10 - ctx.measureText(this.text).width, this.positionY  + 50);
        
        ctx.restore();
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
          ctx.drawImage(this.img, this.positionX , this.positionY, this.imageSize[0], this.imageSize[1]);
        if(this.text)
          ctx.fillText(this.text, this.positionX + 10 , this.positionY + 50);
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
  // ctx.restore();
  }
}


