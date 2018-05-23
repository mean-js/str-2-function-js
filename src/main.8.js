var safeEval = require('safe-eval')

var code = '{pid: process.pid, apple: a()}'
var context = {
  process: process,
  a: function () { return 'APPLE' }
}
var evaluated = safeEval(code, context)
console.log(evaluated);