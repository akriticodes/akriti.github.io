//brightness
var inputrangeBrightness = document.querySelector('.brightnessSlider');
inputrangeBrightness.addEventListener('input',function(event){
	if (!layersArray[activeLayerIndex])
    alertUser()
  else{
		layersArray[0].setBrightness(event)
	}
});

//contrast
var inputrangeContrast = document.querySelector('.contrastSlider');
inputrangeContrast.addEventListener('input',function(event){
	if (!layersArray[activeLayerIndex])
    alertUser()
  else{
		layersArray[0].setContrast(event)
	}	
});

//saturation
var inputrangeSaturation = document.querySelector('.saturationSlider');
inputrangeSaturation.addEventListener('input',function(event){
	if (!layersArray[activeLayerIndex])
    alertUser()
  else{
		layersArray[0].setSaturation(event)
	}
});

//tint
var inputrangeTint = document.querySelector('.tintSlider');
inputrangeTint.addEventListener('input',function(event){
	if (!layersArray[activeLayerIndex])
    alertUser()
  else{
	layersArray[0].setTint(event)
	}
});

//temperature
var inputrangeTemp = document.querySelector('.temperatureSlider');
inputrangeTemp.addEventListener('input',function(event){
	if (!layersArray[activeLayerIndex])
    alertUser()
  else{
		layersArray[0].setTemperature(event)
	}	
});




