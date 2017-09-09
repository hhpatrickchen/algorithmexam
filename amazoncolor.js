var color = "111111111111000001100110"; //sample

var color_arr = color.split();

// var r = color_arr.slice(0, 7);
// var g = color_arr.slice(8, 15);
// var b = color_arr.slice(16, 23);

var r = color.substring(0, 8);
var g = color.substring(8, 16);
var b = color.substring(16, 24);


var r_d = parseInt(r, 2);
var r_g = parseInt(g, 2);
var r_b = parseInt(b, 2);


//test
// var r_d = 0;
// var r_g = 255;
// var r_b = 255;


function getDistance(c_r, c_g, c_b, color){

    var r, g, b;
    switch(color){
        case "red": r = 255; g = 0, b = 0;  break;
        case "green": r = 0; g = 255, b = 0;  break;
        case "blue": r = 0; g = 0, b = 255;  break;
        case "black": r = 0; g = 0, b = 0;  break;
        case "white": r = 255; g = 255, b = 255;  break;
        
    }
    var dd = Math.pow( Math.abs(c_r - r), 2) +  Math.pow( Math.abs(c_g - g), 2) +  Math.pow( Math.abs(c_b - b), 2)  ;
    return  parseInt(Math.sqrt(dd)) ;


}

//red  255,0,0
var dred = getDistance(r_d, r_g, r_b, "red");
//green 0,255,0
var dgreen = getDistance(r_d, r_g, r_b, "green");

//blue 0,0,255
var dblue = getDistance(r_d, r_g, r_b, "blue");
//white 255,255,255
var dwhite = getDistance(r_d, r_g, r_b, "white");
//black 0,0,0
var dblack = getDistance(r_d, r_g, r_b, "black");

var min = Math.min(dred, dgreen, dblue, dwhite,dblack);
var retColor = "";
switch(min){
    case dred: retColor = "red"; break;
    case dgreen: retColor = "green"; break;
    case dblue: retColor = "blue"; break;
    case dwhite: retColor = "white"; break;
    case dblack: retColor = "black"; break;
    
}

console.log(retColor)
