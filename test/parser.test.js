
'use strict';

var chai = require('chai');
var expect = chai.expect;
var mtools = require('../lib/index.js');

describe('PARSER: links', function() {
    
    describe('extracts images links out of text', function() {
        it('returns links', function(done) {
            
            var _in = 'www.link.one http://link.two https://link.three <a href= "link5" ></a> < a href = "link6" > test link </a>';
            var _out = 'www.link.one';
            
            var res = mtools.parse.links(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('extracts images links out of text', function() {
        it('returns links', function(done) {
            
            var _in = 'www.link.one http://link.two https://link.three <a href= "link5" ></a> < a href = "link6" > test link </a>';
            var _out = ' http://link.two';
            
            var res = mtools.parse.links(_in, 1);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('extracts images links out of text', function() {
        it('returns links', function(done) {
            
            var _in = 'www.link.one http://link.two https://link.three <a href= "link5" ></a> < a href = "link6" > test link </a>';
            var _out = 'link6';
            
            var res = mtools.parse.links(_in, 1, 'href');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});

describe('PARSER: images', function() {
    
    describe('extracts images links out of text', function() {
        it('returns image src', function(done) {
            
            var _in = ' mycomputer.home/kofi.png Kofi is going to school. This is a picture of his school: < img alt ' + 
                '="kofi\'s school" src = "www.ko.fi/sch/img\'>. His favorite teacher is called Ama.' ;

            var _out = 'www.ko.fi/sch/img';
            
            var res = mtools.parse.images(_in, null, null, 'src');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('extracts images links out of text', function() {
        it('returns image src', function(done) {
            
            var _in = ' mycomputer.home/kofi.png Kofi is going to school. This is a picture of his school: < img alt ' + 
                '="kofi\'s school" src = "www.ko.fi/sch/img\'>. His favorite teacher is called Ama.' ;

            var _out = 'mycomputer.home/kofi.png';
            
            var res = mtools.parse.images(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});
