var char = "abcde";
var n  =5;
var nextc =0;
//console.log(char.charCodeAt(0))


function getencrypt(s, n){
    var char_arr = s.split("");
    //to array
    for(var i = 0; i < n ; i++){
        for(var j = 0; j<= i;j++){
            nextc = s.charCodeAt(j)+1;
            if(nextc >122) nextc = 97;
            char_arr[j] = String.fromCharCode(nextc);
        }
    }


    return char_arr.join();
}

console.log(getencrypt(char, n));
