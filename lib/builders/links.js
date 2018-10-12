'use strict';

module.exports = function(text, video) {
    return (text || '').replace(
        /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
        function(match, space, url) {
            var hyperlink = url.split('<')[0];

            if (!hyperlink.match('^https?://'))
                hyperlink = 'http://' + hyperlink;
                
            var config = {};
            config.video = video ? true : false;
            config.width = config.video ? (video.width || 640) : 640;
            config.height = config.video ? (video.height || 360 ) : 360;
            config.frameborder = config.video ? (video.frameborder || 0 ) : 0;
            config.attributes = config.video ? (video.attributes || 'allowfullscreen> ' ) : 'allowfullscreen> ';

            if (config.video) {
                var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var matched = hyperlink.match(regExp);

                if (matched && matched[2].length == 11) {
                    var id = matched[2];

                    if (id)
                        return (
                            '<iframe width="' + config.width + '" height="' + config.height + '" src="https://www.youtube.com/embed/' +
                            id +
                            '" frameborder="' + config.frameborder + '" ' + config.attributes +  '</iframe>'
                        );
                } else {
                    return space + '<a href="' + hyperlink + '">' + url + '</a>';
                }
            } else {
                return space + '<a href="' + hyperlink + '">' + url + '</a>';
            }
        }
    );
};
