'use strict';

module.exports = function(template, data, vanity) {
    var vane = vanity || '';
    return String(template || '').replace(
        /{{(.*?)}}/gi,
        function(match, file, position) {
            return data[file] || vane;
        }
    );
};