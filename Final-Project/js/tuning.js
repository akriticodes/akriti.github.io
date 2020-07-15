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

