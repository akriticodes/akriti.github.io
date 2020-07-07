const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var image = new Image;   
imageName ='star.jpg';
image.src = './image/filters.jpg';

ctx.drawImage(image, 0, 0);


// function Layers(text){
//   var node = document.querySelector(".layers");   
//     var newDiv = document.createElement("div");
//     newDiv.classList.add("pic-one");
//       var eyeDiv = document.createElement("div");
//       eyeDiv.classList.add("eye-icon");
//           var aDiv = document.createElement("a");
//           aDiv.href = "#";
//             var iDiv = document.createElement("i");
//             iDiv.classList.add("fa");
//             iDiv.classList.add("fa-eye");
//             aDiv.appendChild(iDiv);

//       eyeDiv.appendChild(aDiv);
//     newDiv.appendChild(eyeDiv);
//     var textDiv = document.createElement("div");
//     textDiv.classList.add("layer-title");
//     textDiv.innerHTML = text;
//     newDiv.appendChild(textDiv);
 
//   node.appendChild(newDiv);  

// }

// Layers(imageName);