function powersum(value, pow, num){
    var total = value - Math.pow(num, pow);

    if(total < 0) return 0;
    if(total == 0 ) return 1;

    return powersum(total, pow, num+1) + powersum(value, pow, num +1);
}
