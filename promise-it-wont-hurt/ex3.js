new Promise(function(fulfill, reject) {
    setTimeout(reject(new Error('REJECTED!')), 300);
}).then(undefined, function(err) {
    console.log(err.message);
})