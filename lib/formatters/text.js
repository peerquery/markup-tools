'use strict';

module.exports = function(text, count) {
    var trim = count ? Math.min(Number(count), 160) : null;
    var stripedHtml = text.replace(/<[^>]+>/g, '');
    var stripedImg = stripedHtml.replace(/([a-z\-_0-9\/\:\.]*\.(jpe?g|bmp|svg|png|gif|tif|tiff))/gi, '');
    var stripedLinks = stripedImg.replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, '');
    var stripedNewline = stripedLinks.replace(/\r?\n|\r/g, ' ');
    if (trim) {
        var trimmedText = stripedNewline.trim();
        return trimmedText.length > count ? trimmedText.substring(0, count) + '... ' : trimmedText;
    } else {
        return stripedNewline;
    }
};
