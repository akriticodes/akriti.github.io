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
    this.imageData;
    this.brightness = 0;//secondish
    this.contrast = 0;
    this.saturation = 0;
    this.tint = 0;
    this.temperature = 0;
    this.vibrance = 0;
    this.filters = {
      1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false, normal : false, raw : false
    }
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

//three
  changeTuning(){
    let myImageData = ctx.createImageData(this.imageData);
    for (var i=0; i < myImageData.data.length; i++){
      myImageData.data[i] = this.imageData.data[i];
    }
    if(this.brightness !==0){
      myImageData = this.changeBrightness(myImageData, this.brightness)
    }
    if(this.contrast !==0){
      myImageData = this.changeContrast(myImageData, this.contrast)
    }
    if(this.saturation !==0){
     myImageData = this.changeSaturation(myImageData, this.saturation)
    }

    if(this.tint !==0){
      myImageData = this.changeTint(myImageData, this.tint)
    }

    if (this.temperature !==0){
      myImageData = this.changeTemperature(myImageData, this.temperature)
    }

    if(this.filters['moon']){
        myImageData = this.changeSaturation(this.changeBrightness(myImageData, 10),0.5);
    }

    if(this.filters['nostalgic']){
      myImageData = this.changeTemperature(this.changeTint(this.changeContrast(this.changeBrightness(myImageData, 10),40),10),-30);
    }

    if(this.filters['fineArt']){
      for (var i=0; i < myImageData.data.length; i+=4) {
        var avg = ( myImageData.data[i] + myImageData.data[i +1] +  myImageData.data[i +2]) / 3;
        myImageData.data[i]     = avg; // red
        myImageData.data[i + 1] = avg; // green
        myImageData.data[i + 2] = avg; // blue
      }
    }

    if(this.filters['raw']){
      myImageData = this.changeSaturation(this.changeContrast(this.changeBrightness(myImageData,5),1),3);
    }
    

    if(this.filters['sepia']){
      var s = 2;
      for (var i=0; i < myImageData.data.length; i+=4) {
        var r = myImageData.data[i];
        var g = myImageData.data[i+1];
        var b = myImageData.data[i+2];
        myImageData.data[i] = ((r * (1 - (0.607 * s))) + (g * (0.769 * s)) + (b * (0.189 * s)));
        myImageData.data[i+1] = ((r * (0.349 * s)) + (g * (1 - (0.314 * s))) + (b * (0.168 * s)));
        myImageData.data[i+2] = ((r * (0.272 * s)) + (g * (0.534 * s)) + (b * (1- (0.869 * s))));
        if(myImageData.data[i] > 255) myImageData.data[i] = 255;
        if(myImageData.data[i+1] > 255) myImageData.data[i+1] = 255;
        if(myImageData.data[i+2] > 255) myImageData.data[i+2] = 255;
        if(myImageData.data[i] < 0)  myImageData.data[i] = 0;
        if(myImageData.data[i+1] < 0)  myImageData.data[i+1] = 0;
        if(myImageData.data[i+2] < 0)  myImageData.data[i+2] = 0; 
      }
    }
    
    if(this.filters['clarendon']){
      myImageData = this.changeSaturation(this.changeBrightness(this.changeTint(this.changeTemperature(myImageData,14),4),4),14);
    }

    if(this.filters['inkwell']){
      myImageData = this.changeSaturation(this.changeBrightness(this.changeTint(this.changeTemperature(myImageData,3),3),1),2);
    }

    if(this.filters['classic']){
      for(var i = 0; i < myImageData.data.length; i+=4) {
        var avg = (myImageData.data[i] + myImageData.data[i +1] + myImageData.data[i +2]) / 3;
        if(myImageData.data[i] < (myImageData.data[i+1] * 2) || myImageData.data[i] < (myImageData.data[i+2] * 4)) {
          myImageData.data[i]     = avg; // red
          myImageData.data[i + 1] = avg; // green
          myImageData.data[i + 2] = avg; // blue  
        } 
      }
    }



    

    if (this.vibrance){
      for(var i=0; i< myImageData.data.length; i+=4) {
        var r = myImageData.data.length[i];
        var g = myImageData.data.length[i+1];
        var b = myImageData.data.length[i+2];
        var max = Math.max(r, g, b);
        var avg = (r + g + b) / 3;
        var amt = ((Math.abs(max - avg) * 2 / 255) * this.vibrance) / 100;
        if (r < max) myImageData.data.length[i] = r + (myImageData.data.length- data[i]) * amt;
        if (g < max) myImageData.data.length[i+1] = g + (myImageData.data.length - data[i+1]) * amt;
        if (b < max) myImageData.data.length[i+2] = b + (myImageData.data.length- data[i+2]) * amt;
      }
    }

   
    ctx.putImageData(myImageData, 0, 0);
  }

  //two
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

  setVibrance(e){
    this.vibrance = (e.target.value -50) * 4 ; 
    updateScreen();
  }

  changeBrightness(myImageData, s){
    for (var i=0; i < myImageData.data.length; i++) {
      myImageData.data[i] =myImageData.data[i]+s < 255 ? myImageData.data[i]+s : 255;
      myImageData.data[i+1] = myImageData.data[i+1]+s < 255 ?myImageData.data[i+1]+s : 255;
      myImageData.data[i+2] = myImageData.data[i+2]+10 < 255 ? myImageData.data[i+2]+s : 255;
    }
    return myImageData;
  }

  changeContrast(myImageData, contrast){
    let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
      for (let i=0; i < myImageData.data.length; i+=4) {//r,g,b,a
        myImageData.data[i] =  factor * (myImageData.data[i] - 128) + 128;
        myImageData.data[i+1] = factor * (myImageData.data[i+1] - 128) + 128;
        myImageData.data[i+2] =  factor * (myImageData.data[i+2] - 128) + 128;
      }
      return myImageData;
  }

  changeTint(myImageData, tint){
    for(var i=0; i< myImageData.data.length; i+=4) {
      myImageData.data[i+1] = myImageData.data[i+1] +  tint //G
      if(myImageData.data[i+1] > 255) myImageData.data[i+1] = 255;
      if(myImageData.data[i+1] < 0) myImageData.data[i+1] = 0;
    }
    return myImageData;
  }


  changeSaturation(myImageData,saturation){
    var RW = 0.299;
    var RG = 0.587;
    var RB = 0.114;
    var sBar = parseFloat(1 - saturation);         
    var a =  sBar * RW + saturation;
    var b =  sBar * RW;
    var c =  sBar * RW;
    var d =  sBar * RG;
    var e = sBar * RG + saturation;
    var f = sBar * RG;
    var g = sBar * RB;
    var h = sBar * RB;
    var itemp = sBar * RB + saturation;
    for(var i=0; i< myImageData.data.length; i+=4) {
      var tempRed = myImageData.data[i];
      var tempGreen = myImageData.data[i+1];
      var tempBlue = myImageData.data[i+2];
      myImageData.data[i] = a * tempRed + d * tempGreen + g * tempBlue//R
      myImageData.data[i+1] = b * tempRed + e * tempGreen + h * tempBlue//G
      myImageData.data[i+2] = c * tempRed + f * tempGreen + itemp * tempBlue//B
    }
    return myImageData;
  }

  changeTemperature(myImageData,temperature){
    for(var i=0; i< myImageData.data.length; i+=4) {
      myImageData.data[i] =(myImageData.data[i] + temperature)//R
      //_data[i+1] = //G
      myImageData.data[i+2] =(myImageData.data[i+2] - temperature)//B

      if(myImageData.data[i] > 255) myImageData.data[i] = 255;
      if(myImageData.data[i+2] > 255) myImageData.data[i+2] = 255;
      if(myImageData.data[i] < 0)myImageData.data[i] = 0;
      if(myImageData.data[i+2] < 0) myImageData.data[i+2] = 0;
    }
    return myImageData;
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
        if(this.img)
          this.imageData = ctx.getImageData(0,0,this.imageSize[0],this.imageSize[1]);
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
        if(this.img)
          this.imageData = ctx.getImageData(0,0,this.imageSize[0],this.imageSize[1]);
      }//four
      if(this.brightness !== 0 || this.contrast!== 0 || this.saturation !==0 || this.tint !== 0 || this.temperature !== 0 || this.vibrance!== 0 || this.filters['moon'] || this.filters['sepia'] || this.filters['nostalgic'] || this.filters['inkwell'] || this.filters['fineArt'] || this.filters['clarendon'] || this.filters['classic'] || this.filters['normal']|| this.filters['raw']) 
        this.changeTuning()
    }
  
  // ctx.restore();
  }
}


