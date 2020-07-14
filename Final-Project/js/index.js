const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvasDiv = document.querySelector('.column-two')
let canvasWidth, canvasHeight;
canvasWidth =1000;
canvasHeight = 590;
canvas.height = canvasHeight;
canvas.width = canvasWidth;


//add image to the canvas
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
      }
      img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);     
}

//doodling
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

//moveing
function changePosition(e){
  layersArray[activeLayerIndex].moveing = true;
  layersArray[activeLayerIndex].move(e);
  updateScreen();
}
function continueChangePosition(e){
  layersArray[activeLayerIndex].move(e);
  updateScreen();
}
function finishChangePosition(){
  layersArray[activeLayerIndex].moveing = false;
}


//Add-doodle-layer
var addDoodleButton = document.getElementById('paint-icon');
addDoodleButton.addEventListener('click', function(){
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
  
})

//move-layer-elements
var moveButton = document.getElementById('move-icon');
moveButton.addEventListener('click', function(){
  layersArray[activeLayerIndex].painting = false;
  canvas.addEventListener("mousedown", changePosition);
  canvas.addEventListener("mouseup", finishChangePosition);
  canvas.addEventListener("mousemove", continueChangePosition);
  
})

function removeMouseListener(){
  canvas.removeEventListener("mousedown",startPosition );
  canvas.removeEventListener("mouseup",finishedPosition);
  canvas.removeEventListener("mousemove",continuePosition);
}

function addTextToLayer(text){
   layer = new Layer('text',  layersArray.length);

  // let textPopUp = document.querySelector(".textPopUp");   
  //   this.textIndicatorDiv = document.createElement("div");
  //   this.textIndicatorDiv.classList.add("textPopDiv");
  //   textPopUp.appendChild(this.textIndicatorDiv);
    

  layersArray.push(layer);
  makeActive(layer);
  addLayerEvent(layer);
  layer.addText(text); 
  updateLayersDiv();
  updateScreen();
}

// Add-text-Layer
var addTextButton = document.getElementById('text-icon');
addTextButton.addEventListener('click', function(){
  let textPopUpDiv = document.querySelector(".textPopUpClass");
  textPopUpDiv.style.display = 'block';
})

// Add-resize-Layer
var addResizeButton = document.getElementById('resize-icon');
addResizeButton.addEventListener('click', function(){
  let resizePopUpDiv = document.querySelector(".resize-class");
  resizePopUpDiv.style.display = 'block';
})

//Flip-Canvas
var flipCanvas = document.getElementById('mirror-icon');
flipCanvas.addEventListener('click', function(){
  layersArray[activeLayerIndex].flipImage();
  updateScreen();
})


// //Rotate-Canvas
// var rotateCanvas = document.getElementById('rotate-icon');
// rotateCanvas.addEventListener('click', function(){
//   layersArray[activeLayerIndex].rotateImage();
//   updateScreen();
// })


//Create New Layers
layerButton = document.getElementById('layer-button');
layerButton.addEventListener('click', function(){
  layer = new Layer("Layer " + newLayerNameindex,  layersArray.length);
  layersArray.push(layer);
  makeActive(layer);
  addLayerEvent(layer);
  newLayerNameindex += 1; 
  updateLayersDiv();
})

//Draw Doodle


// zoom-in/zoom-out
// document.onkeydown = function(e){
//   if (e.ctrlKey && e.keyCode == 38){
//     canvas.width += 10;
//     console.log(canvas.width)
//   }else if (e.ctrlKey && e.keyCode == 40){
//     canvas.width -= 10;
//   }
// }




 
