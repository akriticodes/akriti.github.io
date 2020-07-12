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
        image.AddImageToLayers(img);
        layersArray.push(image);
        makeActive(image);
        addLayerEvent(image);  
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

//Add-doodle-layer
var addDoodleButton = document.getElementById('paint-icon');
addDoodleButton.addEventListener('click', function(){

  layersArray[activeLayerIndex].painting = false;
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove",continuePosition);
  
})


function removeMouseListener(){
  canvas.removeEventListener("mousedown",startPosition );
  canvas.removeEventListener("mouseup",finishedPosition);
  canvas.removeEventListener("mousemove",continuePosition);
}


// Add-text-Layer
var addTextButton = document.getElementById('text-icon');
addTextButton.addEventListener('click', function(){
  layer = new Layer('text',  layersArray.length);

  // let textPopUp = document.querySelector(".textPopUp");   
  //   this.textIndicatorDiv = document.createElement("div");
  //   this.textIndicatorDiv.classList.add("textPopDiv");
  //   textPopUp.appendChild(this.textIndicatorDiv);
    

  layersArray.push(layer);
  makeActive(layer);
  addLayerEvent(layer);
  layer.addText();
  updateScreen();
})

//Flip-Canvas
var flipCanvas = document.getElementById('mirror-icon');
flipCanvas.addEventListener('click', function(){
  layersArray[activeLayerIndex].flipImage();
  updateScreen();
})

//Create New Layers
layerButton = document.getElementById('layer-button');
layerButton.addEventListener('click', function(){
  layer = new Layer("Layer " + newLayerNameindex,  layersArray.length);
  layersArray.push(layer);
  makeActive(layer);
  addLayerEvent(layer);
  newLayerNameindex += 1;
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




 
