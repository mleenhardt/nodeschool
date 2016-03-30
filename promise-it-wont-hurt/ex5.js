new Promise(function(fulfil, reject) {
    fulfil('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');