function changeBrightness(myImageData, s){
  for (var i=0; i < myImageData.data.length; i++) {
    myImageData.data[i] =myImageData.data[i]+s < 255 ? myImageData.data[i]+s : 255;
    myImageData.data[i+1] = myImageData.data[i+1]+s < 255 ?myImageData.data[i+1]+s : 255;
    myImageData.data[i+2] = myImageData.data[i+2]+10 < 255 ? myImageData.data[i+2]+s : 255;
  }
  return myImageData;
}

function changeContrast(myImageData, contrast){
  var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    for (var i=0; i < myImageData.data.length; i+=4) {
      myImageData.data[i] =  factor * (myImageData.data[i] - 128) + 128;
      myImageData.data[i+1] = factor * (myImageData.data[i+1] - 128) + 128;
      myImageData.data[i+2] =  factor * (myImageData.data[i+2] - 128) + 128;
    }
    return myImageData;
}

function changeSaturation(myImageData,saturation){
  var RW = 0.299;
  var RG = 0.587;
  var RB = 0.114;
  var sBar = parseFloat(1 - saturation);         
  var a =  sBar * RW + saturation;
  var b =  sBar * RW;
  var c =  sBar * RW;
  var d =  sBar * RG;
  var e = sBar * RG + saturation;
  var f = sBar * RG;
  var g = sBar * RB;
  var h = sBar * RB;
  var itemp = sBar * RB + saturation;
  for(var i=0; i< myImageData.data.length; i+=4) {
    var tempRed = myImageData.data[i];
    var tempGreen = myImageData.data[i+1];
    var tempBlue = myImageData.data[i+2];
    myImageData.data[i] = a * tempRed + d * tempGreen + g * tempBlue//R
    myImageData.data[i+1] = b * tempRed + e * tempGreen + h * tempBlue//G
    myImageData.data[i+2] = c * tempRed + f * tempGreen + itemp * tempBlue//B
  }
  return myImageData;
}

function changeTint(myImageData, tint){
  for(var i=0; i< myImageData.data.length; i+=4) {
    myImageData.data[i+1] = myImageData.data[i+1] +  tint;
    if(myImageData.data[i+1] > 255) myImageData.data[i+1] = 255;
    if(myImageData.data[i+1] < 0) myImageData.data[i+1] = 0;
  }
  return myImageData;
}

function changeTemperature(myImageData,temperature){
  for(var i=0; i< myImageData.data.length; i+=4){
    myImageData.data[i] =(myImageData.data[i] + temperature)
    myImageData.data[i+2] =(myImageData.data[i+2] - temperature)
    if(myImageData.data[i] > 255) myImageData.data[i] = 255;
    if(myImageData.data[i+2] > 255) myImageData.data[i+2] = 255;
    if(myImageData.data[i] < 0)myImageData.data[i] = 0;
    if(myImageData.data[i+2] < 0) myImageData.data[i+2] = 0;
  }
  return myImageData;
}







