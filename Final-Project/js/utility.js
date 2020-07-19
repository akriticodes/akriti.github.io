var activeLayerIndex = 0;
var layersArray = []
var newLayerNameindex = 1;

function makeActive(layer){
  removeMouseListener()
  for (var i = 0; i < layersArray.length; i++) {
    layersArray[i].layerIndicatorDiv.classList.remove('activeLayerDiv')
  }
  activeLayerIndex = layer.index;
  layer.layerIndicatorDiv.classList.add('activeLayerDiv');
}

function addLayerEvent(layer){
  layer.layerIndicatorDiv.addEventListener('click', function (){
    makeActive(layer);
  })
}

function updateIndex(){
  for (var i = 0; i<layersArray.length; i++){
    layersArray[i].index = i;
  }
}

//Delete-Layers
var deleteLayers = document.getElementById('delete-layer-button')
deleteLayers.addEventListener('click', function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    var layerToDelete = activeLayerIndex;
    node = document.querySelector(".layer-list"); 
    node.removeChild(layersArray[layerToDelete].layerIndicatorDiv); 
    layersArray.splice(layerToDelete, 1); 
    updateIndex();
    updateScreen();
    makeActive(layersArray[layersArray.length-1]);
  }
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
  var node = document.querySelector(".layer-list");
  node.innerHTML = '';
  for(var i = layersArray.length-1; i>=0; i--){
    node.appendChild(layersArray[i].layerIndicatorDiv)
  }
}

function swapLayer(layerIndexes) {
  var temp = layersArray[layerIndexes[0]];
  layersArray[layerIndexes[0]] = layersArray[layerIndexes[1]];
  layersArray[layerIndexes[1]] = temp;
  updateIndex();
  updateLayersDiv();
}

function alertUser(){
  return alert("Please select an image first.");
}



