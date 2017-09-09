function palindrome(s)
{
    for (var i=0; i<s.length/2; ++i)
        if (s[i] != s[s.length - 1 - i])
        {
        	return false;
        }
            
    return true;
}

var fruits = "abccba";

var fruits_arr = fruits.split("");
var count = 0;

for(var i = 0; i <fruits_arr.length; i++){
  for(var j = i; j< fruits_arr.length;j++){
    var sub = fruits_arr.slice(i, j+1); 
   // var sub_rev = sub.reverse();
    
    if(palindrome(sub)){
        
       console.log(sub)
        count++;
    }
    
  }
}

console.log(count)
