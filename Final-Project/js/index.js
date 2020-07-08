const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvasDiv = document.querySelector('.column-two')
let canvasWidth, canvasHeight;
canvasWidth =800;
canvasHeight = 590;
canvas.height = canvasHeight;
canvas.width = canvasWidth;
  
var file = document.getElementById('getfile');

file.addEventListener("change",handleImage);

// Add-text-Code
var addTextButton = document.getElementById('text-icon');

addTextButton.addEventListener('click', function(){
  layersArray[activeLayer].addText();
  updateScreen();
})

 
function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
        image = new Layer('image',  layersArray.length);
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



// zoom-in/zoom-out

document.onkeydown = function(e){
  if (e.ctrlKey && e.keyCode == 38){
    canvas.width += 10;
    console.log(canvas.width)
  }else if (e.ctrlKey && e.keyCode == 40){
    canvas.width -= 10;
  }
}


 
