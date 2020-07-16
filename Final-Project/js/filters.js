let filterButtonMoon = document.querySelector('.filter-moon');
filterButtonMoon.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  }
  layersArray[0].filters['moon'] = true;
  updateScreen()
});


let filterButtonSepia = document.querySelector('.filter-sepia');
filterButtonSepia.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  }
  layersArray[0].filters['sepia'] = true;
  updateScreen()
});

let filterButtonNostalgic = document.querySelector('.filter-nostalgic');
filterButtonNostalgic.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  } 
  layersArray[0].filters['nostalgic'] = true;
  updateScreen()
});


let filterButtonInkwell = document.querySelector('.filter-inkwell');
filterButtonInkwell.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  }
  layersArray[0].filters['inkwell'] = true;
  updateScreen()
});



let filterButtonfineArt = document.querySelector('.filter-fineArt');
filterButtonfineArt.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  }
  layersArray[0].filters['fineArt'] = true;
  updateScreen()
});

let filterButtonCharledon = document.querySelector('.filter-clarendon');
filterButtonCharledon.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  }
  layersArray[0].filters['clarendon'] = true;
  updateScreen()
});

let filterButtonClassic = document.querySelector('.filter-classic');
filterButtonClassic.addEventListener('click',function(){
  layersArray[0].filters = {
    1997 : false , sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
  }
  layersArray[0].filters['classic'] = true;
  updateScreen()
});


