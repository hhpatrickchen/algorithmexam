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


//Sparse Arrays 
var input = "4\naba\nbaba\naba\nxzxb\n3\naba\nxzxb\nab";
function processData(input) {
    var arr = input.split('\n');
    var data_count = parseInt(arr[0]) ;
    var data_arr = arr.slice(1,1+ data_count);
    var test_count = arr[1+ data_count];
    var test_arr = arr.slice(1+ data_count+1);

    var count = 0;
    for(var i = 0; i < test_count; i++){
        count = 0;
        for(var j = 0; j <data_count;j++){
            if(test_arr[i] == data_arr[j]){
                count++;
            }
        }
        console.log(count);
    }

} 
 processData(input);
