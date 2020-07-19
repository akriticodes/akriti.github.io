class Moody{
  constructor(myImageData){
    this.tint = 70;
    this.temperature = 70;
    return changeTemperature(changeTint(myImageData,this.tint),this.temperature);
  }
}


