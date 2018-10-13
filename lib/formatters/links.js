'use strict';

module.exports = function(text, replacer) {
    
    var regex = /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi;
    var filler = replacer || '';
    try {
        return String(text).replace(regex, filler);
    } catch (err) {
        //console.log(err);
        return '';
    }
    
};
