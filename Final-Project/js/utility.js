var activeLayerIndex = 0;
var layersArray = []
let newLayerNameindex = 1;

function makeActive(layer){
  removeMouseListener()
  if(layersArray[activeLayerIndex])
    layersArray[activeLayerIndex].layerIndicatorDiv.classList.remove('activeLayerDiv');
    activeLayerIndex = layer.index;
  layer.layerIndicatorDiv.classList.add('activeLayerDiv');
}


function addLayerEvent(layer){
  layer.layerIndicatorDiv.addEventListener('click', function (){
    makeActive(layer);
  })
}


function updateIndex(){
  for (let i = 0; i<layersArray.length; i++){
    layersArray[i].index = i;
    layersArray[i].addListenersInLayerDiv(i);
  }
}


//Delete-Layers
var deleteLayers = document.getElementById('delete-layer-button')
deleteLayers.addEventListener('click', function(){
  let layerToDelete = activeLayerIndex;
  node = document.querySelector(".layer-list"); 
  node.removeChild(layersArray[layerToDelete].layerIndicatorDiv); 
  layersArray.splice(layerToDelete, 1); 
  updateIndex();
  updateScreen();
  makeActive(layersArray[layersArray.length-1]);
}) 


//update screen 
function updateScreen(){
  ctx.fillStyle = "#19141d";
  ctx.rect(0, 0, canvasWidth, canvasHeight);
  ctx.fill();
  layersArray.forEach(function(layer){
    layer.draw();
  })
}

//Make layer div again acc to the array
function updateLayersDiv(){
  let node = document.querySelector(".layer-list");
  node.innerHTML = ''
  layersArray.forEach(function(layer){
    node.appendChild(layer.layerIndicatorDiv)
  })
}

function swapLayer(index1, index2){
  let temp = layersArray[index1];
  layersArray[index1] = layersArray[index2];
  layersArray[index2] = temp;
  updateIndex();
  updateLayersDiv();
}

//Aspect Ratio

// function aspectRatio(){
//   let imageWidth = img.width;
//   let imageHeight = img.height;
//   let aspectRatio = imageWidth/imageHeight;
//   console.log(aspectRatio);
// }