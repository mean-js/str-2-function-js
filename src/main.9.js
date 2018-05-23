let moment = require('moment');

let ref = {
    "dotmatrixTemplate" : function(){
        return new Promise(function(resolve, reject){
            console.log("DM");
            resolve("DM");
        });
    },


    "ledgerTemplate" : function(){
        return new Promise(function(resolve, reject){
            console.log("PDF");
            resolve("PDF");
        });
    }
};


module.exports = ref;