
class Inkwell{
  constructor(myImageData){
    this.saturation = 3;
    this.brightness = 1;
    this.tint = 3;
    this.temperature = 3;
    return changeSaturation(changeBrightness(changeTint(changeTemperature(myImageData,this.temperature),this.tint),this.brightness),this.saturation);
  }
}
