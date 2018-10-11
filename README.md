[![Pull requests](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/peerquery/markup-tools/pulls)
[![Build status](https://travis-ci.org/peerquery/markup-tools.svg?branch=master)](https://travis-ci.org/peerquery/markup-tools)
[![Codebase license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/peerquery/markup-tools/blob/master/LICENSE)

# Markup tools
Markdown and text manipulation tools.

**If you are looking for the earliest versions please see: [Markup Builder](https://www.npmjs.com/package/markup-builder).**


## Installation

### Node.js

```
npm install markup-tools --save
```
Use as:
```
const mtools = require('markup-tools');
```

### Browser

Exposed to the global browser window as `mtool`.

```text
<script src="https://unpkg.com/markup-tools/dist/markup.min.js"></script>
```

## Warning

This is a small purely Javascript-based library designed to work in both the browser and in Node.js. With no dependencies, it uses `REGEX` and helper functions to attempt to parse everything, including text string.

## Usage

## `mtools.parsers`

#### Parsing images
Extract image srcs from text;

```javascript

//API
mtools.parse.image(
	input_string,
	number_of_the_image_link_to_be_returned,
    type_as_png_jpg_bpm_tif_gif,
    source_of_image_link_raw_or_src
);

//Examples

//Call on even slightly healthy text
const text = ' mycomputer.home/kofi.png Kofi is going to school. This is a picture of his school: < img alt ' + 
'="kofi\'s school" src = "www.ko.fi/sch/img\'>. His favorite teacher is called Ama.' ;

const school_thumbnail = mtools.parse.images(text, null, null, 'src');
//'www.ko.fi/sch/img'

const kofi_thumbnail = mtools.parse.images(text);
//'mycomputer.home/kofi.png'
//with no specified source, defaults to 'raw'

```

#### Advanced use

```javascript

const text = ' www.image1.png http://www.image2.jpg www.image3.svg www.image4.png http://www.image5.jpg www.image6.svg < img alt="sample img1\' src="/sample-img1" >  < img alt="sample img2\' src="/sample-img2.jpg" / > < img alt = "sample img3\' src="/sample-img3" > < img alt = "sample img4\' src="/sample-img4.jpg" >';

//Image type supports a trailing '.' to the extension
mtools.img.get(text, 2, '.png', 'raw');
//is the same as
mtools.img.get(text, 2, 'png', 'raw');

//Examples

console.log(mtools.parse.images(text, null, 'jpg', 'raw'));
//'http://www.image2.jpg'

console.log(mtools.parse.images(text, 1, '.png'));
//'www.image4.png'
//defaults to 'raw' mode when no mode is set

console.log(mtools.parse.images(text, 0, 'svg'));
//'www.image3.svg'

console.log(mtools.parse.images(text, 1, '.svg'));
//'www.image6.svg'

console.log(mtools.parse.images(text, null, 'jpg', 'src'));
//'/sample-img2.jpg'

console.log(mtools.parse.images(text, 1, '.jpg', 'src'));
//'/sample-img4.jpg'

console.log(mtools.parse.images(text, 2, null, 'src'));
//'/sample-img1'

```


#### Parsing links
Extract urls from text.

```javascript

//API
mtools.parse.links(
	input_string,
    number_of_the_matched_image_link_to_be_returned,
    source_of_image_link_raw_or_href
);

//Examples

const text = ' www.link.one http://link.two https://link.three <a href= "link5" ></a> < a href = "link6" > test link </a>';

const links = mtools.parse.links(text);
//'www.link.one'
//defaults to 'raw' when no source is specified

const links = mtools.parse.links(text, 1);
//'www.link.two'

const links = mtools.parse.links(text, 1, 'href');
//'link6'

```


### Formatters

#### Text
Clean text elements, inline links and inline image links from text.

```javascript

//API
mtools.format.text(input_string, returned_character_count);

//Examples

const text = '<b>bold</b> face';

const text = mtools.format.text(text);
//'bold face'

const text = mtools.format.text(text, 6);
//'bold f...'
//trimmed to 6 characters

```

#### Links
Clean unattached links from text.

```javascript

//API
mtools.format.links(input_string, replacer_text);

//Examples

const text = 'www.Accra.city is the capital city of <a href="www.ghanaian.website" >Ghana</a>';

const text = mtools.format.links(text);
//' is the capital city of <a href="www.ghanaian.website" >Ghana</a>'

const text = mtools.format.links(text, '_');
//'_ is the capital city of <a href="www.ghanaian.website" >Ghana</a>'

```

#### Images
Clean unattached image links from text

```javascript
//API
mtools.format.images(input_string, replacer_text);

//Examples

const text = 'i am doing my homework.gif on <img scr="english.png" />';

const text = mtools.format.images(text);
//'i am doing my on <img scr="" />'

const text = mtools.format.images(text, 'png', '_');
//'i am doing my homework.gif on <img scr="_" />'

const text = mtools.format.images(text, 'gif', '_');
//'i am doing my _ on <img scr="english.png" />'

const text = mtools.format.images(text, null, '_');
//'i am doing my _ on <img scr="_" />'

```

## Builders
Set of small utilities for building markup.

### Hashtags
Build hyperlinks of all unattached hashtags in a string.

```javascript
//API
mtools.build.hashtag(input_string, scheme);

//Examples

const text = ' hello there @mic, did you join the #omg topic';

const res = mtools.build.hashtags(text, '/hot');
console.log(res);
//'hello there @mic, did you join the <a target="_blank" href="/hot/omg "> #omg </a> topic';

const res = mtools.build.hashtags(text);
console.log(res);
//'hello there @mic, did you join the <a target="_blank" href="/trending/omg "> #omg </a> topic';

```

### Mentions
Build hyperlinks of all unattached mentions in a string.

```javascript

//API
mtools.build.mentions(input_string, scheme);

//Examples

const text = ' hello there @mic, did you join the #omg topic?';

const res = mtools.build.mentions(text, '/user');
console.log(res);
//' hello there <a target="_blank" href="/user/mic">@mic</a>, did you join the #omg topic?';

const res = mtools.build.mentions(text);
console.log(res);
//'hello there <a target="_blank" href="/@mic">@mic</a>, did you join the #omg topic?';

```

### Links
Build link tags of all unattached links in a string.

```javascript

//API
mtools.build.mentions(input_string, video_configs);

//Examples

const configs = {};
configs.width = 400;
configs.height = '300';
configs.frameborder = '2';
configs.attributes = 'data-id="video" onLoad="call_function_loaded()" ';

const text = ' hello there @mic, did you join the #omg topic for www.mybiggest.surprise ? oh, and do not miss this: https://www.youtube.com/watch?v=PKzOWZO_HWU';

const res = mtools.build.links(text, configs);
console.log(res);
//'hello there @mic, did you join the #omg topic for <a href="http://www.mybiggest.surprise">www.mybiggest.surprise</a> ? oh, and do not miss this:<iframe width="400" height="300" src="https://www.youtube.com/embed/PKzOWZO_HWU" frameborder="2" data-id="video" onLoad="call_function_loaded()" </iframe>'

const res = mtools.build.links(text);
console.log(res);
//'hello there @mic, did you join the #omg topic for <a href="http://www.mybiggest.surprise">www.mybiggest.surprise</a> ? oh, and do not miss this: <a href="https://www.youtube.com/watch?v=PKzOWZO_HWU">https://www.youtube.com/watch?v=PKzOWZO_HWU</a>'

```


### Images
Build image tags of all unattached image links in a string.

```javascript

//API
mtools.build.images(input_string);

//Examples

const text = 'any comments about my shot: my.big.surprise/boom.png';

const res = mtools.build.images(text);
console.log(res);
//'any comments about my shot: <img src="my.big.surprise/boom.png" /><br/>'

```

### Template
Build a template using Mustache-style {{ double curly brackets }} variable placeholders.

```javascript

//API
mtools.build.template(template_string, variables_object, placeholder_for_no_value);

//Examples

const text = 'please keep the {{var1}} in my {{var2}}{{var3}} ';

let obj = {};
obj.var1 = 'book';
obj.var2 = 'bag';
obj.var3 = ', thank you';

const res = mtools.build.template(text, obj);
console.log(res);
//'please keep the book in my bag, thank you'

let obj = {};
obj.var1 = 'book';

const res = mtools.build.template(text, obj);
console.log(res);
//'please keep the book in my '

let obj = {};
obj.var1 = 'book';
obj.var2 = 'bag';

const res = mtools.build.template(text, obj, '***');
console.log(res);
//'please keep the book in my bag***'

```


## To Do
* Improve documentation.
* Support retuning of array by parser.
* Set default of `markup.parse.images()` to parse using both `raw` and `src` modes when no default mode is set.
* Set default of `markup.parse.links()` to parse using both `raw` and `href` modes when no default mode is set.
* Setup automated testing.
* Document with JSDOC.
* Support parsing of thumbnails images from Youtube links.
* Provide playground to try out our REGEXes and helper functions.


## Contributions

Are welcome, particularly for enabling support for parsing content from *IPFS, DTube and other video sites*.
