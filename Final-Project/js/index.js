const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvasDiv = document.querySelector('.column-two')
var canvasWidth, canvasHeight;
canvasWidth =1000;
canvasHeight = 590;
canvas.height = canvasHeight;
canvas.width = canvasWidth;
var stickers = ["images/heart.png","images/passport.png", "images/luggage.png","images/gps.png",,"images/beard.png","images/sticker.png","images/airplane.png","images/mountain.png", "images/bus.png", "images/diary.png","images/camcorder.png","images/beach.png","images/train.png","images/like.png","images/hotel.png","images/polaroid.png","images/sunglasses.png","images/photo.png","images/sale.png","images/streetsign.png","images/suitcase.png","images/doorhanger.png","images/hotAirBalloon.png","images/compass.png","images/hotel bell.png","images/emoji1.png","images/emoji2.png","images/smile.png","images/emoji3.png","images/emoji4.png","images/emoji5.png","images/emoji6.png","images/emoji7.png","images/emoji8.png","images/emoji9.png","images/emoji10.png","images/emoji11.png","images/emoji12.png","images/emoji13.png","images/Thug-Life-Gold-Chain.png","images/Thug-Life-Glasses.png","images/dollarChain.png"]


//Uploading image to the canvas
var file = document.getElementById('getfile');
file.addEventListener("change",handleImage);
function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
        image = new Layer(e.target.files[0].name,  layersArray.length);
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio  = Math.min ( hRatio, vRatio );
        image.AddImageToLayers(img, [img.width*ratio, img.height*ratio]);
        layersArray.push(image);
        makeActive(image);
        addLayerEvent(image);  
        updateLayersDiv();
        updateScreen();
        image.imageData = ctx.getImageData(0,0,image.imageSize[0],image.imageSize[1]);
      }
      img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);     
}

//download image from canvas
var downloadBtn = document.getElementById('downloadBtn')
downloadFile.addEventListener('click', downloadImg);
function downloadImg(){
  canvas.width = layersArray[0].imageSize[0];
  canvas.height = layersArray[0].imageSize[1];
  updateScreen()
  image = canvas.toDataURL("image/png");
  downloadFile.download = layersArray[0].name.slice(0, -4)+ '-imageine.jpg';
  downloadFile.href = image;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  updateScreen();
}

//Flip-Section
var flipCanvas = document.getElementById('mirror-icon');
flipCanvas.addEventListener('click', function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[activeLayerIndex].flipImage();
    updateScreen();
  } 
})

//Text-Section
  function addTextToLayer(text, textSize, color){
    layer = new Layer('text',  layersArray.length);
    layersArray.push(layer);
    makeActive(layer);
    addLayerEvent(layer);
    layer.addText(text, textSize, color); 
    updateLayersDiv();
    updateScreen();
  }

  // Add-text-Layer
  var addTextButton = document.getElementById('text-icon');
  addTextButton.addEventListener('click', function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    let textPopUpDiv = document.querySelector(".textPopUpClass");
    textPopUpDiv.style.display = 'block';
    let resizePopUpDiv = document.querySelector(".resize-class");
    resizePopUpDiv.style.display = 'none';
  }
  })


//Doodle-Section
  function startPosition(e){
    layersArray[activeLayerIndex].painting = true;
    layersArray[activeLayerIndex].doodles.push([])
    layersArray[activeLayerIndex].doodle(e);
    updateScreen();
  }
  function continuePosition(e){
    layersArray[activeLayerIndex].doodle(e);
    updateScreen();
  }
  function finishedPosition(){
    layersArray[activeLayerIndex].painting = false;
  }

  //Adding-doodle-layer
  var addDoodleButton = document.getElementById('paint-icon');
  addDoodleButton.addEventListener('click', function(){
    if (!layersArray[activeLayerIndex])
      alertUser()
    else{
      doodle = new Layer('doodle',  layersArray.length);
      layersArray.push(doodle);
      makeActive(doodle);
      addLayerEvent(doodle);  
      updateLayersDiv(); 
      updateScreen();
      layersArray[activeLayerIndex].painting = false;
      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mouseup", finishedPosition);
      canvas.addEventListener("mousemove",continuePosition);  
    }
  })

  //Sticker-Section

  var stickersnode = document.querySelector(".stickers-list");
  stickers.forEach(function(sticker){
  AddstickerstoLayer(sticker)
})

  function AddstickerstoLayer(sticker){
    var stickersDiv = document.createElement("div");
    stickersDiv.classList.add("sticker");
    var stickerImg = document.createElement('img');
    stickerImg.src = sticker;
    stickerImg.classList.add('sticker-img');
    addStickerListener(stickersDiv, sticker);
    stickersDiv.appendChild(stickerImg);
    stickersnode.appendChild(stickersDiv)
  }
  
  function addStickerListener(stickersDiv, sticker){
    stickersDiv.addEventListener('click', function(){
      if (!layersArray[activeLayerIndex])
        alertUser()
      else{
        image = new Image()
        image.src = sticker;
        layer = new Layer(sticker.slice(7,-4),  layersArray.length);
        layer.AddImageToLayers(image, [100, 100]);
        layersArray.push(layer);
        makeActive(layer);
        addLayerEvent(layer); 
        updateLayersDiv();
        updateScreen();
      
        layer.imageData = ctx.getImageData(0,0,canvasWidth,canvasHeight);
      }
    }) 
  }

//Move-Section
function changePosition(e){
  if (activeLayerIndex > 0){
    layersArray[activeLayerIndex].moveing = true;
    layersArray[activeLayerIndex].move(e);
    updateScreen();
  }
}
function continueChangePosition(e){
  layersArray[activeLayerIndex].move(e);
  updateScreen();
}
function finishChangePosition(){
  layersArray[activeLayerIndex].moveing = false;
}

//move-layer-elements
  var moveButton = document.getElementById('move-icon');
  moveButton.addEventListener('click', function(){
    if (!layersArray[activeLayerIndex])
      alertUser()
    else{
      layersArray[activeLayerIndex].painting = false;
      canvas.addEventListener("mousedown", changePosition);
      canvas.addEventListener("mouseup", finishChangePosition);
      canvas.addEventListener("mousemove", continueChangePosition);  
    }  
  })

  function removeMouseListener(){
    canvas.removeEventListener("mousedown",startPosition );
    canvas.removeEventListener("mouseup",finishedPosition);
    canvas.removeEventListener("mousemove",continuePosition);
  }


  // Resize-Section
  var addResizeButton = document.getElementById('resize-icon');
  addResizeButton.addEventListener('click', function(){
    if (!layersArray[activeLayerIndex])
      alertUser()
    else{
      let resizePopUpDiv = document.querySelector(".resize-class");
      resizePopUpDiv.style.display = 'block';
      let textPopUpDiv = document.querySelector(".textPopUpClass");
      textPopUpDiv.style.display = 'none';
    }
  })

//Create New Layers
layerButton = document.getElementById('layer-button');
layerButton.addEventListener('click', function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layer = new Layer("Layer " + newLayerNameindex,  layersArray.length);
    layersArray.push(layer);
    makeActive(layer);
    addLayerEvent(layer);
    newLayerNameindex += 1; 
    updateLayersDiv();
  }  
})





 
