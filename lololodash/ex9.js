var _ = require("lodash");

var worker = function(list) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(list);
};

module.exports = worker;