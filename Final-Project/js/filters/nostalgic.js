class Nostalgic{
  constructor(myImageData){
    this.temperature = -30;
    this.tint = 10;
    this.contrast = 40;
    this.brightness = 10;
    return changeTemperature(changeTint(changeContrast(changeBrightness(myImageData, this.brightness),this.contrast),this.tint),this.temperature);
  }
}
