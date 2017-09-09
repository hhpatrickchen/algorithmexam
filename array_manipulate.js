//swap function
Array.prototype.swap = function(x,y){
    var tmp = this[x];
    this[x] = this[y];
    this[y] = tmp;
}

//test
var array = [1,2,3,4,5]
array.swap(2,4);
console.log(array)


