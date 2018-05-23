global.moment = require("moment");

var x= "Helo!!";
global.xyz = "120";

var afun = function(){
    console.log("Hello World");
    console.log(global.xyz);

    console.log(global.moment());
};

//console.log(global);


// NORMAL CALL
afun();

var str2fun = new Function("return " + afun.toString())();
str2fun();