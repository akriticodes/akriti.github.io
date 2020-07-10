class Layer{
  constructor(name, index ){
    this.img;
    this.text;
    this.upIcon;
    this.eyeIcon;
    this.downIcon;
    this.name = name;
    this.index = index;
    this.visible = true;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.layerIndicatorDiv;
    
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
  
  AddImageToLayers(img){
    this.img = img;
  }

  addText(){
    this.text = 'Testing';
    ctx.font = "30px Arial";
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
    this.eyeIcon.addEventListener('click', function(){
      layersArray[index].changeVisibility();
      updateScreen();
    });
    this.upIcon.addEventListener('click', function(){
      if(index !== 0){
        swapLayer([index, index - 1]);
        index = index - 1;
      }
      updateScreen();
    });
    this.downIcon.addEventListener('click', function(){
      if(index !== layersArray.length -1){
        swapLayer([index, index + 1]);
        index = index + 1;
      }
      updateScreen();
    });

  }


  draw(){
    if(this.visible){
      ctx.fillStyle = '#ffffff'
      if(this.img)
        ctx.drawImage(this.img, 0, 0, canvasWidth, canvasHeight);
      if(this.text)
        ctx.fillText(this.text, 10, 50);
    }
  }
}


