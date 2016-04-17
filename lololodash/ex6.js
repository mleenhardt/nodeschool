var _ = require("lodash");

var worker = function(list) {
    return _.chain(list)
        .groupBy('username')
        .map(function(obj, key) {
            return {
                username: key,
                comment_count: _.size(obj)
            }
        })
        .orderBy('comment_count', 'desc')
        .value()
};


module.exports = worker;