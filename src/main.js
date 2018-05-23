let str_as_fun = `function(){
    console.log("Hello World");
}`;

let fun = new Function("return " + str_as_fun)();
fun();