class Calm{
  constructor(myImageData){
    this.temperature = 70;
    this.tint = 20;
    return changeTemperature(changeTint(myImageData,this.temperature),this.tint);
  }
}
