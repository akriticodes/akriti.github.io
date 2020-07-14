let inputrange = document. querySelectorAll('.slider');

for (let i = 0; i<= inputrange.length- 1; i++){
  inputrange[i].addEventListener('input',increaseBrightness);
}


var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
function increaseBrightness(){
    for (var i=0; i < imageData.data.length; i+=4) {
			imageData[i] =imageData[i]+100 < 255 ? imageData[i]+100 : 255;
			imageData[i+1] = imageData[i+1]+100 < 255 ?imageData[i+1]+100 : 255;
			imageData[i+2] = imageData[i+2]+100 < 255 ? imageData[i+2]+100 : 255;
		}

	}

function decreaseBrightness(){
	for (var i=0; i < imageData.data.length; i+=4){
		imageData[i] = imageData[i]-100 >= 0 ? imageData[i]-100 : 0;
		imageData[i+1] = imageData[i+1]-100 >= 0 ? imageData[i+1]-100 : 0;
		imageData[i+2] = imageData[i+2]+100 >= 0 ? imageData[i+2]-100 : 0;
			}
}