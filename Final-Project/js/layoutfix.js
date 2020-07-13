sliderButton = document.getElementById('slider-button');
sliderButton.addEventListener('click', function(){
  let filterDiv = document.querySelector('.filters');
  filterDiv.style.display = 'none';
  let tuningDiv = document.querySelector('.tuning');
  tuningDiv.style.display = 'block';
  let stickersDiv = document.querySelector('.stickers-list');
  stickersDiv.style.display = 'none';

})

filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', function(){
  let filterDiv = document.querySelector('.filters');
  filterDiv.style.display = 'block';
  let tuningDiv = document.querySelector('.tuning');
  tuningDiv.style.display = 'none';
  let stickersDiv = document.querySelector('.stickers-list');
  stickersDiv.style.display = 'none';

})

emojiButton = document.getElementById('sticker-icon');
emojiButton.addEventListener('click', function(){
  let filterDiv = document.querySelector('.filters');
  filterDiv.style.display = 'none';
  let tuningDiv = document.querySelector('.tuning');
  tuningDiv.style.display = 'none';
  let stickersDiv = document.querySelector('.stickers-list');
  stickersDiv.style.display = 'block';

})

let closebtns = document.querySelector(".close");
  closebtns.addEventListener("click", function() {
    let textPopUpDiv = document.querySelector(".textPopUpClass");
    textPopUpDiv.style.display = 'none';
  });

  let okButtonDiv = document.getElementById("ok-button");
  okButtonDiv.addEventListener("click", function() {
    let textInput = document.getElementById('fname')
    addTextToLayer(textInput.value);
    textInput.value = '';
    let textPopUpDiv = document.querySelector(".textPopUpClass");
    textPopUpDiv.style.display = 'none';

  });

//removing the onpress enter

window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();
  let textInput = document.getElementById('fname')
  addTextToLayer(textInput.value);
  textInput.value = '';
  let textPopUpDiv = document.querySelector(".textPopUpClass");
  textPopUpDiv.style.display = 'none';}}},true);



