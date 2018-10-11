'use strict';

module.exports = function(text, scheme) {
    // Cribbed from https://github.com/twitter/twitter-text/blob/v1.14.7/js/twitter-text.js#L90
    return text.replace(
        /(^|[^a-zA-Z0-9_!#$%&*@＠\/]|(^|[^a-zA-Z0-9_+~.-\/#]))[@＠]([a-z][-\.a-z\d]+[a-z\d])/gi,
        (match, preceeding1, preceeding2, user) => {
            const userLower = user.toLowerCase();
            //const valid = validate_account_name(userLower) == null;
            const valid = userLower;
            const filler1 = scheme ? scheme.replace(/\/$/, '') : '/@';
            const filler2 = filler1 == '/@' ? '' : '/';

            const preceedings = (preceeding1 || '') + (preceeding2 || ''); // include the preceeding matches if they exist

            return valid
                ? preceedings +
                      '<a target="_blank" href="' +
                      filler1 +
                      filler2 +
                      userLower +
                      '">@' +
                      user +
                      '</a>'
                : preceedings + '@' + user;
        }
    );
};
