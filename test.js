/*jslint indent: 4, nomen: true */
/*globals require, module, describe, it, Buffer, __dirname */
(function () {

    'use strict';

    var // requires
        path = require('path'),
        vinyl = require('vinyl'),
        assert = require('assert'),
        gutil = require('gulp-util'),
        es = require('event-stream'),
        // mustacher
        mustacher = require('./');

    describe('gulp-mustacher', function () {
        it('should render with a placehold dummy image 300x300', function (cb) {
            var stream = mustacher();
            stream.on('data', function (file) {
                assert.strictEqual(file.contents.toString(), '<img src="//placehold.it/300x300" alt="" title="" />');
            });
            stream.on('end', cb);
            stream.write(new gutil.File({
                base: __dirname,
                path: path.join(__dirname, 'src', 'index.tpl'),
                contents: new Buffer('{{$image 300}}')
            }));
            stream.end();
        });
    });

}());
