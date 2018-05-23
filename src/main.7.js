let fs = require('fs');
let _eval = require('eval');

let moduleAsStr = fs.readFileSync("./src/main.9.js", {"encoding": "utf8"});

let ref = _eval(moduleAsStr, true);
console.log(ref);

ref.dotmatrixTemplate().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});


ref.ledgerTemplate().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});

