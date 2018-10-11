'use strict';

module.exports = function(text, number, source) {
    var regex;
    var urls;
    var target = (source == 'raw' || source == 'href') ? source : 'raw';
    var num = number || 0;
    if (target == 'raw') {
        regex = /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi;
        urls = text.match(regex);
        if (urls) return urls[num];
        return '';
    } else if (target == 'href')  {
        regex = regex = /<\s*a\s+[^>]*href\s*=\s*[\"']?([^\"' >]+)[\"' >]/gi;
        urls = text.match(regex);
        if (urls )  urls = urls.map(function(url) { var uri = url.split('"'); return uri[uri.length - 2]; });
        if (urls) return urls[num];
        return '';
    }
};
