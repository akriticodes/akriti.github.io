var points =[
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 80, y: 20},
  { x: 100, y: 40 },
  { x: 120, y: 80 },
  { x: 140, y: 100 },
  { x: 200, y: 220 },
  { x: 200, y: 190 },
  { x: 250, y: 250 }

];



 var box = document.createElement('div');
 box.style.width='300px';
 box.style.height ='300px';
 box.style.border = '5px solid #ddd';
 box.style.position ='relative';
 box.style.margin = '0 auto';
 document.body.appendChild(box);


 for (var i = 0; i<points.length; i ++){
   var point = document.createElement('div');
   point.style.height = '15px';
   point.style.width = '15px';
   point.style.borderRadius ='50%';
   point.style.position ='absolute';
   point.style.left =(points[i]['x']) + 'px';
   point.style.top = (points[i]['y']) + 'px';
   point.style.backgroundColor = 'blue';
   box.appendChild(point);

 }


