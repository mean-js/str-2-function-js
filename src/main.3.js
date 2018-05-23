let ref = {
    "x" : "globale",
    "afun" : function({p1, p2}){
        console.log("Hello World");
        console.log(p1);
        console.log(p2);
        console.log(this.x);
    }
}

let input = {p1: 123, p2: "abcd"};
let fun = new Function('param1', "return " + ref.afun.toString())();
fun(input);

ref.afun(input);
module.exports = ref;