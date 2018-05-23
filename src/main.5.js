
let x = "Global Variable";

let ref = {
    "xyz" : "I am xyz variable",
    "afun" : function(){
        console.log("Hello World");
        console.log(this.xyz);
        console.log(x);
    }
}


// NORMAL CALL
ref.afun();

// STR TO FUNCTION THEN CALL
ref.afun1 = new Function("return " + ref.afun.toString())();
ref.afun1();

module.exports = ref;