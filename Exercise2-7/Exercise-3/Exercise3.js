var obj ={
  name: 'Akriti',
  address: 'Pulchwok',
  email: 'akriti@gmail.com',
  interests: 'Literature',
  education : [{name:"United College", enrolledDate:2010},
{name:"Kathmandu University", enrolledDate:2016}]
};

educations = obj.education;

for(var j =0; j<educations.length; j++){
  console.log("Name:" + educations[j].name+ ", Date:" + educations[j].enrolledDate )
}


