class Raw{
  constructor(myImageData){
    this.saturation = 5;
    this.contrast = 1;
    this.brightness = 20;
    return myImageData = changeSaturation(changeContrast(changeBrightness(myImageData,5),1),3);
  }
}