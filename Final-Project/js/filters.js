var normalButtonClassic = document.querySelector('.filter-normal');
normalButtonClassic.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false, normal : false
    }
    layersArray[0].filters['normal'] = true;
    updateScreen()  
  }
});

var filterButtonMoon = document.querySelector('.filter-moon');
filterButtonMoon.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    }
    layersArray[0].filters['moon'] = true;
    updateScreen()
  }
});

var filterButtonSepia = document.querySelector('.filter-sepia');
filterButtonSepia.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    }
    layersArray[0].filters['sepia'] = true;
    updateScreen()
  }
});

var filterButtonNostalgic = document.querySelector('.filter-nostalgic');
filterButtonNostalgic.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    } 
    layersArray[0].filters['nostalgic'] = true;
    updateScreen()
  }
});

var filterButtonInkwell = document.querySelector('.filter-inkwell');
filterButtonInkwell.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    }
    layersArray[0].filters['inkwell'] = true;
    updateScreen()
  }
});

var filterButtonfineArt = document.querySelector('.filter-fineArt');
filterButtonfineArt.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    }
    layersArray[0].filters['fineArt'] = true;
    updateScreen()
  }  
});

var filterButtonCharledon = document.querySelector('.filter-clarendon');
filterButtonCharledon.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    }
    layersArray[0].filters['clarendon'] = true;
    updateScreen()
  }  
});

var filterButtonClassic = document.querySelector('.filter-classic');
filterButtonClassic.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false
    }
    layersArray[0].filters['classic'] = true;
    updateScreen()
  }  
});

var filterButtonRaw = document.querySelector('.filter-raw');
filterButtonRaw.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false, raw : false
    }
    layersArray[0].filters['raw'] = true;
    updateScreen()
  }  
});

var filterButtonCalm = document.querySelector('.filter-Calm');
filterButtonCalm.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false, raw : false, calm : false
    }
    layersArray[0].filters['calm'] = true;
    updateScreen()
  }  
});

var filterButtonMoody = document.querySelector('.filter-moody');
filterButtonMoody.addEventListener('click',function(){
  if (!layersArray[activeLayerIndex])
    alertUser()
  else{
    layersArray[0].filters = {
      1997 : false, sepia : false, moon : false, nostalgic : false, inkwell : false, fineArt : false, clarendon : false, classic : false, raw : false, calm : false
    }
    layersArray[0].filters['moody'] = true;
    updateScreen()
  }  
});




