var spawn = require("child_process").spawn;
var duplexer = require("duplexer2");


module.exports = function (cmd, args) {
    var childProcess = spawn(cmd, args);
    //return childProcess.stdin.pipe(childProcess.stdout);
    return duplexer(childProcess.stdin, childProcess.stdout);
};