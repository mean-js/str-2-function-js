let afun = function({p1, p2}){
    console.log("Hello World");
    console.log(p1);
    console.log(p2);
};

let fun = new Function('param1', "return " + afun.toString())();
fun({p1: 123, p2: "abcd"});