
'use strict';

var chai = require('chai');
var expect = chai.expect;
var mtools = require('../lib/index.js');

describe('FORMATTER: text', function() {
    
    describe('removes html attributes from text', function() {
        it('returns string with no html attributes', function(done) {
            
            var _in = '<b>bold</b> face';
            var _out = 'bold face';
            
            var res = mtools.format.text(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('removes html attributes from text', function() {
        it('returns substring with no html attributes', function(done) {
            
            var _in = '<b>bold</b> face';
            var _out = 'bold f... ';
            
            var res = mtools.format.text(_in, 6);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});

describe('FORMATTER: links', function() {
    
    describe('removes raw links from text', function() {
        it('returns string with no raw links', function(done) {
            
            var _in = 'www.Accra.city is the capital city of <a href="www.ghanaian.website" >Ghana</a>';
            var _out = ' is the capital city of <a href="www.ghanaian.website" >Ghana</a>';
            
            var res = mtools.format.links(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('removes raw links from text', function() {
        it('returns substring with raw links replaced', function(done) {
            
            var _in = 'www.Accra.city is the capital city of <a href="www.ghanaian.website" >Ghana</a>';
            var _out = '_ is the capital city of <a href="www.ghanaian.website" >Ghana</a>';
            
            var res = mtools.format.links(_in, '_');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
});

describe('FORMATTER: images', function() {
    
    describe('removes raw image links from text', function() {
        it('returns string with no raw image links', function(done) {
            
            var _in = 'i am doing my homework.gif on <img scr="english.png" />';
            var _out = 'i am doing my  on <img scr="" />';
            
            var res = mtools.format.images(_in);
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('removes raw image links from text', function() {
        it('returns string with no raw image links', function(done) {
            
            var _in = 'i am doing my homework.gif on <img scr="english.png" />';
            var _out = 'i am doing my homework.gif on <img scr="_" />';
            
            var res = mtools.format.images(_in, 'png', '_');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('removes raw image links from text', function() {
        it('returns string with no raw image links', function(done) {
            
            var _in = 'i am doing my homework.gif on <img scr="english.png" />';
            var _out = 'i am doing my _ on <img scr="english.png" />';
            
            var res = mtools.format.images(_in, 'gif', '_');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    describe('removes raw image links from text', function() {
        it('returns string with no raw image links', function(done) {
            
            var _in = 'i am doing my homework.gif on <img scr="english.png" />';
            var _out = 'i am doing my _ on <img scr="_" />';
            
            var res = mtools.format.images(_in, null, '_');
            expect(res).to.equal(_out);
            done();
            
        });
    });
    
    
});
