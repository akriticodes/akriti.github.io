const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvasDiv = document.querySelector('.column-two')
canvasWidth = canvasDiv.clientWidth;
canvasHeight = canvasDiv.clientHeight;
canvas.height = canvasHeight;
canvas.width = canvasWidth;
  
var file = document.getElementById('getfile');

  file.addEventListener("change",handleImage);


function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
        // canvas.width = img.width;
        // canvas.height = img.height;
        // ctx.drawImage(img,0,0);
          ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight, 0,0, img.width, img.height);
      }
      img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);     
}


 
