class Layer{
  constructor(name, index ){
    this.img;
    this.text;
    this.name = name;
    this.index = index;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.layerIndicatorDiv;
    this.AddlayerstoList();
    this.InitializeLayerCanvas();
  }

  AddlayerstoList(){
    let node = document.querySelector(".layers");   
    this.layerIndicatorDiv = document.createElement("div");
    this.layerIndicatorDiv.classList.add("layerDiv");
    let eyeDiv = document.createElement("div");
    eyeDiv.classList.add("eye-icon");
    let aDiv = document.createElement("a");
    aDiv.href = "#";
    let iDiv = document.createElement("i");
    iDiv.classList.add("fa");
    iDiv.classList.add("fa-eye");
    aDiv.appendChild(iDiv);
    eyeDiv.appendChild(aDiv);
    this.layerIndicatorDiv.appendChild(eyeDiv);
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

  draw(){
    ctx.fillStyle = '#ffffff'
    if(this.img)
      ctx.drawImage(this.img, 0, 0, canvasWidth, canvasHeight);
    if(this.text)
      ctx.fillText(this.text, 10, 50);
  }
}


