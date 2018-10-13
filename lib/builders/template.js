'use strict';

module.exports = function(template, data, vanity) {
    var vane = vanity || '';
    return String(template || '').replace(
        /{{\s*(.*?)\s*}}/gi,
        function(match, file, position) {
            return data[file] || vane;
        }
    );
};