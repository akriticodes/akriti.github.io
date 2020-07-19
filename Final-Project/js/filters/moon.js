class Moon{
  constructor(myImageData){
    this.brightness = 10;
    this.saturation = 0.5;
    return changeSaturation(changeBrightness(myImageData, this.brightness),this.saturation);
  }
}



