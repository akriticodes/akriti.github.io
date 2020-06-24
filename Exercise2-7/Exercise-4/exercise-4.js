var fruits = [
  {id: 1, name: 'Banana', color: 'Yellow'},
  {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(Arr, Title){
  console.log('search by name')
  Arr.forEach(function(fruit)
    {
      if(fruit.name == Title)
      {
        console.log(fruit);
      }
    }
  );
}

searchByName(fruits, 'Apple');

function searchByKey(Arr, Key, Title){
  console.log('search by key')
  Arr.forEach(function(fruit)
    {
      if(fruit[Key] == Title)
      {
        console.log(fruit);
      }
    }
  );
}

searchByKey(fruits, 'color', 'Red');