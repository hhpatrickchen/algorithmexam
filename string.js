//longest unduplicated string

var str = "pwwkew"; //abc

var arr = str.split('');
function longeststring(arr){

    var maxstring = arr[0], tmpstring = arr[0];

    for(var i = 1; i <arr.length;i++){
        if(!tmpstring.includes(arr[i])){
            tmpstring += arr[i];
            if(tmpstring.length  > maxstring.length){
                maxstring = tmpstring;
            }
        }else{
            tmpstring = arr[i];
        }
    }

    return maxstring;
}

var answer = longeststring(str);
console.log(answer);
