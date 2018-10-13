
'use strict';

var chai = require('chai');
var expect = chai.expect;
var mtools = require('../lib/index.js');

describe('BUILDER: links', function() {
    
    describe('builds links with no custom configs', function() {
        it('returns string with raw links converted to a tags', function(done) {
            
            var _in = 'hello there @mic, did you join the #omg topic for www.mybiggest.surprise ? oh, and do not miss this: https://www.youtube.com/watch?v=PKzOWZO_HWU';
            var _out = 'hello there @mic, did you join the #omg topic for <a href="http://www.mybiggest.surprise">www.mybiggest.surprise</a> ? oh, and do not miss this: <a href="https://www.youtube.com/watch?v=PKzOWZO_HWU">https://www.youtube.com/watch?v=PKzOWZO_HWU</a>';
            
            var res = mtools.build.links(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('builds links with custom configs', function() {
        it('returns string with raw links converted to a tags', function(done) {
            
            const configs = {};
            configs.width = 400;
            configs.height = '300';
            configs.frameborder = '2';
            configs.attributes = 'data-id="video" onLoad="call_function_loaded()" ';

            var _in = 'hello there @mic, did you join the #omg topic for www.mybiggest.surprise ? oh, and do not miss this: https://www.youtube.com/watch?v=PKzOWZO_HWU';
            var _out = 'hello there @mic, did you join the #omg topic for <a href="http://www.mybiggest.surprise">www.mybiggest.surprise</a> ? oh, and do not miss this:<iframe width="400" height="300" src="https://www.youtube.com/embed/PKzOWZO_HWU" frameborder="2" data-id="video" onLoad="call_function_loaded()" </iframe>';

            var res = mtools.build.links(_in, configs);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});

describe('BUILDER: images', function() {
    
    describe('builds raw image links', function() {
        it('returns string with raw image links converted to img tags', function(done) {
            
            var _in = 'any comments about my shot: my.big.surprise/boom.png';
            var _out = 'any comments about my shot: <img src="my.big.surprise/boom.png" /><br/>';
            
            var res = mtools.build.images(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});


describe('BUILDER: template', function() {
    
    describe('builds template with object file', function() {
        it('returns string with {{}} values replaced by obj argument values', function(done) {
            
            let obj = {};
            obj.var1 = 'book';
            obj.var2 = 'bag';
            obj.var3 = ', thank you';
            
            var _in = 'please keep the {{var1}} in my {{var2}}{{var3}}';
            var _out = 'please keep the book in my bag, thank you';
            
            var res = mtools.build.template(_in, obj);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    
    describe('builds template with object file', function() {
        it('returns string with {{}} values replaced by obj argument values', function(done) {
            
            let obj = {};
            obj.var1 = 'book';

            
            var _in = 'please keep the {{var1}} in my {{var2}}{{var3}}';
            var _out = 'please keep the book in my ';
            
            var res = mtools.build.template(_in, obj);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    
    describe('builds template with object file and vanity filler', function() {
        it('returns string with {{}} values replaced by obj argument values', function(done) {
            
            let obj = {};
            obj.var1 = 'book';
            obj.var2 = 'bag';

            
            var _in = 'please keep the {{var1}} in my {{var2}}{{var3}}';
            var _out = 'please keep the book in my bag***';
            
            var res = mtools.build.template(_in, obj, '***');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    
});


describe('BUILDER: hashtags', function() {
    
    describe('builds hashtags hyperlinks with custom scheme', function() {
        it('returns string with raw hashtags converted to a tags', function(done) {
            
            var _in = 'hello there @mic, did you join the #omg topic';
            var _out = 'hello there @mic, did you join the <a target="_blank" href="/hot/omg "> #omg </a> topic';
            
            var res = mtools.build.hashtags(_in, '/hot');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('builds hashtags hyperlinks with default scheme', function() {
        it('returns string with raw hashtags converted to a tags', function(done) {
            
            var _in = 'hello there @mic, did you join the #omg topic';
            var _out = 'hello there @mic, did you join the <a target="_blank" href="/trending/omg "> #omg </a> topic';
            
            var res = mtools.build.hashtags(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});


describe('BUILDER: mentions', function() {
    
    describe('builds mentions hyperlinks with custom scheme', function() {
        it('returns string with raw mentions converted to a tags', function(done) {
            
            var _in = 'hello there @mic, did you join the #omg topic?';
            var _out = 'hello there <a target="_blank" href="/user/mic">@mic</a>, did you join the #omg topic?';
            
            var res = mtools.build.mentions(_in, '/user');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('builds mentions hyperlinks with default scheme', function() {
        it('returns string with raw mentions converted to a tags', function(done) {
            
            var _in = 'hello there @mic, did you join the #omg topic?';
            var _out = 'hello there <a target="_blank" href="/@mic">@mic</a>, did you join the #omg topic?';
            
            var res = mtools.build.mentions(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});

