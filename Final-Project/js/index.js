const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var image = new Image;   
imageName ='star.jpg';
image.src = './image/filters.jpg';

ctx.drawImage(image, 0, 0);

var file = document.getElementById('getFile');
  file.addEventListener("change",fileSelectHandler, false);

 /**
  * Image file select handler
  * @method fileSelectHandler 
  */
 function fileSelectHandler(event) {
  filename = event.target.files[0].name.split(".")[0];
}

