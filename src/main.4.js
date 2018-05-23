var x= "Helo!!";
var afun = function(){
    console.log("Hello World");
    console.log(x);
};

// NORMAL CALL
afun();

var str2fun = new Function("return " + afun.toString())();
str2fun();