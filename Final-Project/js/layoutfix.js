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



