var points =[
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 80, y: 20},
  { x: 100, y: 40 },
  { x: 120, y: 80 },
  { x: 140, y: 100 },
  { x: 160, y: 120 }
];

 var box = document.createElement('div');
 box.style.width='200px';
 box.style.height ='200px';
 box.style.border = '5px solid #ddd';
 box.style.position ='relative';
 document.body.appendChild(box);


 for (var i = 0; i<points.length; i ++){
   var point = document.createElement('div');
   point.style.height = '10px';
   point.style.width = '10px';
   point.style.borderRadius ='50%';
   point.style.position ='absolute';
   point.style.left =(points[i]['x']) + 'px';
   point.style.top = (points[i]['y']) + 'px';
   point.style.backgroundColor = 'blue';
   box.appendChild(point);

 }


