let inputrange = document. querySelectorAll('.slider');

for (let i = 0; i<= inputrange.length - 1; i++){
  inputrange[i].addEventListener('input',increaseBrightness);
}


var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);

console.log(imageData)
function increaseBrightness(){
    for (var j=0; j < imageData.data.length; j+=4) {
      imageData[j] =imageData[j]+100 < 255 ? imageData[j]+100 : 255;
			imageData[j+1] = imageData[j+1]+100 < 255 ?imageData[j+1]+100 : 255;
			imageData[j+2] = imageData[j+2]+100 < 255 ? imageData[j+2]+100 : 255;
		}

	}

// function decreaseBrightness(){
// 	for (var j=0; j < imageData.data.length; j+=4){
// 		imageData[j] = imageData[j]-100 >= 0 ? imageData[j]-100 : 0;
// 		imageData[j+1] = imageData[j+1]-100 >= 0 ? imageData[j+1]-100 : 0;
// 		imageData[j+2] = imageData[j+2]+100 >= 0 ? imageData[j+2]-100 : 0;
// 			}
// }