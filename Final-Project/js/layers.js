class Layer{
  constructor(name, index ){
    this.img;
    this.text;
    this.upIcon;
    this.eyeIcon;
    this.downIcon;
    this.imageSize;
    this.tint = 0;
    this.imageData;
    this.name = name;
    this.doodles = [];
    this.vibrance = 0;
    this.contrast = 0;
    this.rotation = 0;
    this.positionX = 0;
    this.positionY = 0;
    this.index = index;
    this.visible = true;
    this.brightness = 0;
    this.saturation = 0;
    this.drawPoints = [];
    this.temperature = 0;
    this.moveing = false;
    this.flipped = false;
    this.painting = false;
    this.AddlayerstoList();
    this.layerIndicatorDiv;
    this.layerIndicatorDiv;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.InitializeLayerCanvas();
    this.textColor = '#ff0000'
    this.addListenersInLayerDiv(this.index);
    this.filters = {
      1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false, normal : false, raw : false, calm : false, moody : false
    }
  }

  AddlayerstoList(){ 
    this.layerIndicatorDiv = document.createElement("div");
    this.layerIndicatorDiv.classList.add("layerDiv");
    var eyeDiv = document.createElement("div");
    eyeDiv.classList.add("eye-icon");
    var aDiv = document.createElement("a");
    aDiv.href = "#";
    this.eyeIcon = document.createElement("i");
    this.eyeIcon.classList.add("fa");
    this.eyeIcon.classList.add("fa-eye");
    aDiv.appendChild(this.eyeIcon);
    eyeDiv.appendChild(aDiv);
    this.layerIndicatorDiv.appendChild(eyeDiv);

    if(this.index == 0){
      var lockDiv = document.createElement('div');
      lockDiv.classList.add("lock-icon");
      this.lockIcon = document.createElement("i");
      this.lockIcon.classList.add("fa");
      this.lockIcon.classList.add("fa-lock");
      lockDiv.appendChild(this.lockIcon);
      this.layerIndicatorDiv.appendChild(lockDiv);
    }

    var upDiv = document.createElement('div');
    upDiv.classList.add("up-icon");
    this.upIcon = document.createElement("i");
    this.upIcon.classList.add("fa");
    this.upIcon.classList.add("fa-level-down");
    upDiv.appendChild(this.upIcon);
    this.layerIndicatorDiv.appendChild(upDiv);

    var downDiv = document.createElement('div');
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


  InitializeLayerCanvas(){
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();
  } 
  
  AddImageToLayers(img, imgSize){
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

  addText(text, textSize, textColor){
    this.textDiv.innerHTML = text.slice(0, 15);
    this.text = text;
    this.textColor = textColor;
    this.textSize = textSize;
    ctx.font = textSize+"px 'Patrick Hand', cursive";
  }

  changeTuning(){
    var myImageData = ctx.createImageData(this.imageData);
    for (var i=0; i < myImageData.data.length; i++){
      myImageData.data[i] = this.imageData.data[i];
    }
    if(this.brightness !==0){
      myImageData = changeBrightness(myImageData, this.brightness)
    }
    if(this.contrast !==0){
      myImageData = changeContrast(myImageData, this.contrast)
    }
    if(this.saturation !==0){
     myImageData = changeSaturation(myImageData, this.saturation)
    }

    if(this.tint !==0){
      myImageData = changeTint(myImageData, this.tint)
    }

    if (this.temperature !==0){
      myImageData = changeTemperature(myImageData, this.temperature)
    }

    if(this.filters['moon']){
      myImageData = new Moon(myImageData);
    }

    if(this.filters['nostalgic']){
      myImageData = new Nostalgic(myImageData);
    }

    if(this.filters['fineArt']){
      myImageData = new FineArt(myImageData);
    }

    if(this.filters['raw']){
      myImageData = new Raw(myImageData);
    }
    

    if(this.filters['sepia']){
      myImageData = new Sepia(myImageData);
    }
    
    if(this.filters['clarendon']){
      myImageData = new Charledon(myImageData);
    }

    if(this.filters['inkwell']){
      myImageData = new Inkwell(myImageData);
    }

    if(this.filters['calm']){
      myImageData = new Calm(myImageData);
    }

    if(this.filters['moody']){
      myImageData = new Moody(myImageData);
    }

    if(this.filters['classic']){
      myImageData = new Classic(myImageData);
    }
   
    ctx.putImageData(myImageData, 0, 0);
  }

  setBrightness(e){
    this.brightness = (e.target.value - 50); 
    updateScreen();
  }
  setContrast(e){
    this.contrast = (e.target.value - 50) * 2; 
    updateScreen();
  }

  setSaturation(e){
    this.saturation = (e.target.value -50)/25; 
    updateScreen();
  }

  setTint(e){
    this.tint = (e.target.value - 50); 
    updateScreen();
  }

  setTemperature(e){
    this.temperature = (e.target.value - 50); 
    updateScreen();
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
      layersArray[that.index].changeVisibility();
      updateScreen();
    });
    this.upIcon.addEventListener('click', function () {
      if (that.index > 1) {
        swapLayer([that.index, that.index - 1]);
      }
      updateScreen();
    });
    this.downIcon.addEventListener('click', function () {
      if (that.index !== layersArray.length - 1 && that.index > 0) {
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
          ctx.drawImage(this.img, -this.positionX - this.imageSize[0], this.positionY , this.imageSize[0], this.imageSize[1]);
        if(this.text){ 
          ctx.font = this.textSize+"px 'Patrick Hand', cursive";
          ctx.fillStyle = this.textColor;
          ctx.fillText(this.text, -this.positionX + 10 - ctx.measureText(this.text).width, this.positionY  + 50);
          ctx.fillStyle = '#ffffff'}
        
        ctx.restore();
        if(this.doodles){
          this.doodles.forEach(function(drawPoints){
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "white";
            drawPoints.forEach(function(point){  
              ctx.lineTo(layersArray[0].imageSize[0] - point[0], point[1]);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(layersArray[0].imageSize[0] - point[0], point[1]);
            })
          })
        }
        if(this.img)
          this.imageData = ctx.getImageData(0,0,this.imageSize[0],this.imageSize[1]);
      }
      else{
        ctx.fillStyle = '#ffffff'
        if(this.img)
          ctx.drawImage(this.img, this.positionX , this.positionY, this.imageSize[0], this.imageSize[1]);
        if(this.text){
          ctx.font = this.textSize+"px 'Patrick Hand', cursive";
          ctx.fillStyle = this.textColor
          ctx.fillText(this.text, this.positionX + 10 , this.positionY + 50);
           ctx.fillStyle = '#ffffff';}
        if(this.doodles){
          this.doodles.forEach(function(drawPoints){
            ctx.beginPath();
            ctx.lineWidth = 7;
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
        if(this.img)
          this.imageData = ctx.getImageData(0,0,this.imageSize[0],this.imageSize[1]);
      }
      if(this.brightness !== 0 || this.contrast!== 0 || this.saturation !==0 || this.tint !== 0 || this.temperature !== 0 || this.vibrance!== 0 || this.filters['moon'] || this.filters['sepia'] || this.filters['nostalgic'] || this.filters['inkwell'] || this.filters['fineArt'] || this.filters['clarendon'] || this.filters['classic'] || this.filters['normal']|| this.filters['raw'] || this.filters['calm'] || this.filters['moody']) 
        this.changeTuning()
    }
  }
}


