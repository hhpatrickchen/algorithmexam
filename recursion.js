//power sum
function powersum(value, pow, num){
    var total = value - Math.pow(num, pow);

    if(total < 0) return 0;
    if(total == 0 ) return 1;

    return powersum(total, pow, num+1) + powersum(value, pow, num +1);
}

//gcd
//var a = 24, b = 54;
function gcd( a,  b)
{
    // 令 a 比 b 大，比較容易思考。
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}

//5 steps problem
function steps(n){
    if(n == 1) return 1;
    if(n == 2) return 2;

    return steps(n-1)+ steps(n-2);
}

console.log(steps(12));
