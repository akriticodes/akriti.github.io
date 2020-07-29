
class Classic{
  constructor(myImageData){
    this.tint = 60;
    this.temperature = 30;
    this.saturation = 1;
    this.brightness = 2;
    return changeBrightness(changeSaturation(changeTemperature(changeTint(myImageData,this.tint),this.temperature),this.saturation),this.brightness);
  }
}
