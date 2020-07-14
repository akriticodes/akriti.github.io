var activeLayerIndex = 0;
var layersArray = []
let newLayerNameindex = 1;
var stickers = ["images/heart.png","images/001-passport.png", "images/002-luggage.png","images/004-airplane.png","images/005-mountain.png", "images/009-bus.png", "images/017-diary.png", "images/029-camcorder.png", "images/bikini [sticker].png"]


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
  for (let i = 0; i<layersArray.length; i++){
    layersArray[i].index = i;
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
  node.innerHTML = '';
  for(let i = layersArray.length-1; i>=0; i--){
    node.appendChild(layersArray[i].layerIndicatorDiv)
  }

}

function swapLayer(layerIndexes) {
  let temp = layersArray[layerIndexes[0]];
  layersArray[layerIndexes[0]] = layersArray[layerIndexes[1]];
  layersArray[layerIndexes[1]] = temp;
  updateIndex();
  updateLayersDiv();
}

let stickersnode = document.querySelector(".stickers-list");


stickers.forEach(function(sticker){
  AddstickerstoLayer(sticker)
})
function AddstickerstoLayer(sticker){
  let stickersDiv = document.createElement("div");
  stickersDiv.classList.add("sticker");
  let  stickerImg = document.createElement('img');
  stickerImg.src = sticker;
  stickerImg.classList.add('sticker-img');
  addStickerListener(stickersDiv, sticker);
  stickersDiv.appendChild(stickerImg);
  stickersnode.appendChild(stickersDiv)
}

function addStickerListener(stickersDiv, sticker){
  stickersDiv.addEventListener('click', function(){
    image = new Image()
    image.src = sticker;
    layer = new Layer(sticker.slice(7,-4),  layersArray.length);
    layer.AddImageToLayers(image, [100, 100]);
    layersArray.push(layer);
    makeActive(layer);
    addLayerEvent(layer); 
    updateLayersDiv();
    updateScreen();
  })
}


//Aspect Ratio

// function aspectRatio(){
//   let imageWidth = img.width;
//   let imageHeight = img.height;
//   let aspectRatio = imageWidth/imageHeight;
//   console.log(aspectRatio);
// }

