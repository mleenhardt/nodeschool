function attachTitle(val) {
    return 'DR. ' + val;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);