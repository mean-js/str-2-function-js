
let x = "Global Variable";

let ref = {
    "afun" : function(){
        console.log("Hello World");
        console.log(x);
    }
}


// NORMAL CALL
ref.afun();

// STR TO FUNCTION THEN CALL
ref.afun = new Function("return " + ref.afun.toString())();
ref.afun();

module.exports = ref;