var _ = require("lodash");

var worker = function(list) {
    return _.forEach(list, function(city, key) {
        if (city.population < 0.5) {
            city.size = 'small';
        } else if (city.population < 1) {
            city.size = 'med';
        } else {
            city.size = 'big';
        }
    });
};


module.exports = worker;