sliderButton = document.getElementById('slider-button');
sliderButton.addEventListener('click', function(){
  var filterDiv = document.querySelector('.filters');
  filterDiv.style.display = 'none';
  var tuningDiv = document.querySelector('.tuning');
  tuningDiv.style.display = 'block';
  var stickersDiv = document.querySelector('.stickers-list');
  stickersDiv.style.display = 'none';

})

filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', function(){
  var filterDiv = document.querySelector('.filters');
  filterDiv.style.display = 'block';
  var tuningDiv = document.querySelector('.tuning');
  tuningDiv.style.display = 'none';
  var stickersDiv = document.querySelector('.stickers-list');
  stickersDiv.style.display = 'none';

})

emojiButton = document.getElementById('sticker-icon');
emojiButton.addEventListener('click', function(){
  var filterDiv = document.querySelector('.filters');
  filterDiv.style.display = 'none';
  var tuningDiv = document.querySelector('.tuning');
  tuningDiv.style.display = 'none';
  var stickersDiv = document.querySelector('.stickers-list');
  stickersDiv.style.display = 'block';

})

var closebtn = document.querySelector(".close");
closebtn.addEventListener("click", function() {
  var textPopUpDiv = document.querySelector(".textPopUpClass");
  textPopUpDiv.style.display = 'none';
});

var closebtnResize = document.querySelector(".closeResize");
closebtnResize.addEventListener("click", function() {
  var resizePopUpDiv = document.querySelector(".resize-class");
  resizePopUpDiv.style.display = 'none';
});

var okButtonDiv = document.getElementById("ok-button");
okButtonDiv.addEventListener("click", function() {
  var textInput = document.getElementById('fname')
  var textSize = document.getElementById('text-font-size')
  var textColor = document.querySelector('.colorPicker')
  addTextToLayer(textInput.value, textSize.value,textColor.value);
  textInput.value = '';
  var textPopUpDiv = document.querySelector(".textPopUpClass");
  textPopUpDiv.style.display = 'none';
});

var okButtonResize = document.getElementById("ok-buttonResize");
okButtonResize.addEventListener("click", function() {
  var widthInput = document.getElementById('popUpwidth');
  var heightInput = document.getElementById('popUpheight');
  layersArray[activeLayerIndex].resizeLayer(widthInput.value, heightInput.value);
  widthInput.value = '';
  heightInput.value = '';
  var resizePopUpDiv = document.querySelector(".resize-class");
  resizePopUpDiv.style.display = 'none';
  updateScreen()
});

//removing the onpress enter form submit 
window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();
  return false;}}},true);


  



