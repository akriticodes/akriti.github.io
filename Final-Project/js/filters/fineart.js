class FineArt{
  constructor(myImageData){
    for (var i=0; i < myImageData.data.length; i+=4) {
      var avg = ( myImageData.data[i] + myImageData.data[i +1] +  myImageData.data[i +2]) / 3;
      myImageData.data[i]     = avg; // red
      myImageData.data[i + 1] = avg; // green
      myImageData.data[i + 2] = avg; // blue
    }
    return myImageData;
  }
}
