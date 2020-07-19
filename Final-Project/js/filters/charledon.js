class Charledon{
  constructor(myImageData){
    this.temperature = 24;
    this.tint = 4;
    this.brightness = 4;
    this.saturation = 1.5;
    return changeSaturation(changeBrightness(changeTint(changeTemperature(myImageData,this.temperature),this.tint),this.brightness),this.saturation);
  }
}
