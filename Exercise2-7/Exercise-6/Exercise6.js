var numbers=[1,2,3,4];

function transform(collection ,tranFunc){
    Arr=[];
    collection.forEach(function(num){
        Arr.push(tranFunc(num));

    });
    return Arr;
}

var outputs = transform(numbers,function(num){
    return num * 2;
})

console.log(Arr)