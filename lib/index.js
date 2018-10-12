'use strict';

//formatters
var format = {};
format.links = require('./formatters/links.js');
format.images = require('./formatters/images.js');
format.text = require('./formatters/text.js');

//parsers
var parse = {};
parse.links = require('./parsers/links.js');
parse.images = require('./parsers/images.js');

//builders
var build = {};
build.mentions = require('./builders/mentions.js');
build.hashtags = require('./builders/hashtags.js');
build.links = require('./builders/links.js');
build.images = require('./builders/images.js');
build.template = require('./builders/template.js');

module.exports = {format, parse, build};
