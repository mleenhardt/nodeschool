
var promise = new Promise(function(fulfill, reject) {
   setTimeout(fulfill('FULFILLED!'), 300);
}).then(function(res) {
    console.log(res);
});