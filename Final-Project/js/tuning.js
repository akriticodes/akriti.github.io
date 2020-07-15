//one-brightness
let inputrangeBrightness = document.querySelector('.brightnessSlider');
inputrangeBrightness.addEventListener('input',function(event){
	layersArray[0].setBrightness(event)
});

//one-contrast
let inputrangeContrast = document.querySelector('.contrastSlider');
inputrangeContrast.addEventListener('input',function(event){
	layersArray[0].setContrast(event)
});

//one-saturation
let inputrangeSaturation = document.querySelector('.saturationSlider');
inputrangeSaturation.addEventListener('input',function(event){
	layersArray[0].setSaturation(event)
});

//one-tint
let inputrangeTint = document.querySelector('.tintSlider');
inputrangeTint.addEventListener('input',function(event){
	layersArray[0].setTint(event)
});


//one-temperature
let inputrangeTemp = document.querySelector('.temperatureSlider');
inputrangeTemp.addEventListener('input',function(event){
	layersArray[0].setTemperature(event)
});

//one-temperature
let inputrangeVibrance = document.querySelector('.vibranceSlider');
inputrangeVibrance.addEventListener('input',function(event){
	layersArray[0].setVibrance(event)
});





