'use strict';

module.exports = function(text, number, type, source) {
    var regex;
    var src;
    var target = (source == 'raw' || source == 'src') ? source : 'raw';
    if (type) type = (type[0] == '.') ? type.substring(1) : type;
    var num = number || 0;
    if (target == 'raw') {
        if (type){
            if (['jpeg', 'jpg', 'png', 'gif', 'svg', 'bmp', 'tif', 'tiff' ].indexOf(type) == -1) return '';
            regex = new RegExp('([a-z\-_0-9\/\:\.]*\.(' + type + '))', 'gi');
        } else {
            regex = /([a-z\-_0-9\/\:\.]*\.(jpe?g|bmp|svg|png|gif|tif|tiff))/gi;
        }
        src = text.match(regex);
        if (src) return src[num];
        return '';
    } else if (target == 'src')  {
        regex = /<\s*img(?:[^>]*)src\s*=\s*([\"\']([^\"\']+))/gi;
        src = text.match(regex);
        if (src) src = src.map(function(s) { var y = s.split('"'); return y[y.length - 1]; });
        if (type) src = src.filter(s=> ~s.indexOf('.' + type));
        if (src) return src[num];
        return '';
    } 
};
