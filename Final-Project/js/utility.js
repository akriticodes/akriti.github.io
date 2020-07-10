var activeLayerIndex = 0;
var layersArray = []
let newLayerNameindex = 1;

function makeActive(layer){
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

//LayersUp
// var upLayers = document.getElementById('')

//update screen 
function updateScreen(){
  ctx.fillStyle = "#19141d";
  ctx.rect(0, 0, canvasWidth, canvasHeight);
  ctx.fill();
  layersArray.forEach(function(layer){
    layer.draw();
  })
}

function updateLayersDiv(){
  let node = document.querySelector(".layer-list");
  node.innerHTML = ''
  layersArray.forEach(function(layer){
    node.appendChild(layer.layerIndicatorDiv)
  })
}

function swapLayer(layerIndexes){
  
  let temp = layersArray[layerIndexes[0]];
  layersArray[layerIndexes[0]] = layersArray[layerIndexes[1]];
  layersArray[layerIndexes[1]] = temp;
  
  updateIndex();
  updateLayersDiv();
}