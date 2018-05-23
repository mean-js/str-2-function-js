let afun = function(){
    console.log("Hello World");
};

let fun = new Function("return "  + afun.toString())();
fun();