class Sepia{
  constructor(myImageData){
  var s = 2;
      for (var i=0; i < myImageData.data.length; i+=4) {
      var r = myImageData.data[i];
      var g = myImageData.data[i+1];
      var b = myImageData.data[i+2];
      myImageData.data[i] = ((r * (1 - (0.607 * s))) + (g * (0.769 * s)) + (b * (0.189 * s)));
      myImageData.data[i+1] = ((r * (0.349 * s)) + (g * (1 - (0.314 * s))) + (b * (0.168 * s)));
      myImageData.data[i+2] = ((r * (0.272 * s)) + (g * (0.534 * s)) + (b * (1- (0.869 * s))));
      if(myImageData.data[i] > 255) myImageData.data[i] = 255;
      if(myImageData.data[i+1] > 255) myImageData.data[i+1] = 255;
      if(myImageData.data[i+2] > 255) myImageData.data[i+2] = 255;
      if(myImageData.data[i] < 0)  myImageData.data[i] = 0;
      if(myImageData.data[i+1] < 0)  myImageData.data[i+1] = 0;
      if(myImageData.data[i+2] < 0)  myImageData.data[i+2] = 0; 
    }
    return myImageData;
  } 
}


