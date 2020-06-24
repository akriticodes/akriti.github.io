var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];


function sortBy(array, key) {
   
    function compare_to_sort(x,y) {
        
        if (x[key] < y[key])
            return -1;
        if (x[key] > y[key])
            return 1;
        return 0;
    }
    console.log(array.slice().sort(compare_to_sort));
    
    
}


var sorted = sortBy(arr, 'name');





