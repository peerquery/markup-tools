'use strict';

module.exports = function(text, scheme) {
    return text.replace(/(^|\s)(#[-a-z\d]+)/gi, tag => {
        if (/#[\d]+$/.test(tag)) return tag; // Don't allow numbers to be tags
        var space = /^\s/.test(tag) ? tag[0] : '';
        var tag2 = tag.trim().substring(1);
        var tagLower = tag2.toLowerCase();
        var filler = scheme ? scheme.replace(/\/$/, '') : '/trending';
        return (
            space +
            '<a target="_blank" href="' +
            filler +
            '/' +
            tagLower +
            ' ">' +
            tag +
            ' </a>'
        );
    });
};
