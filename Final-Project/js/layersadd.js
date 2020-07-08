class Layer{
  constructor(text){
    this.text = text;
    this.height = canvasHeight;
    this.width = canvasWidth;
    this.InitializeLayerCanvas()
  }
  AddlayerstoList(){
    let node = document.querySelector(".layers");   
    this.newDiv = document.createElement("div");
    this.newDiv.classList.add("pic-one");
    let eyeDiv = document.createElement("div");
    eyeDiv.classList.add("eye-icon");
    let aDiv = document.createElement("a");
    aDiv.href = "#";
    let iDiv = document.createElement("i");
    iDiv.classList.add("fa");
    iDiv.classList.add("fa-eye");
    aDiv.appendChild(iDiv);
    eyeDiv.appendChild(aDiv);
    this.newDiv.appendChild(eyeDiv);
    this.textDiv = document.createElement("div");
    this.textDiv.classList.add("layer-title");
    this.textDiv.innerHTML = this.text;
    this.newDiv.appendChild(this.textDiv);
    node.appendChild(this.newDiv);  
  }

  InitializeLayerCanvas(){//canvas=rectangle
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();
  }  
}

var layersArray = []
layerButton = document.getElementById('layer-button');
layerButton.addEventListener('click', function(){
layer = new Layer("Layer " + (layersArray.length + 1));
layer.AddlayerstoList()
layersArray.push(layer);
})


