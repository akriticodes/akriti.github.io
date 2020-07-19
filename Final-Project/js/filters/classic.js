
class Classic{
  constructor(myImageData){
    this.tint = 60;
    this.temperature = 30;
    this.saturation = 1;
    this.brightness = 2;
    return changeBrightness(changeSaturation(changeTemperature(changeTint(myImageData,60),30),1),2);
  }
}
