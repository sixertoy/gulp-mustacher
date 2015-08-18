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
        it('should ', function (cb) {
            var stream = mustacher();
            stream.on('data', function (file) {
                assert.strictEqual(file.contents.toString(), 'unicorns');
            });
            stream.on('end', cb);
            stream.write(new gutil.File({
                base: __dirname,
                path: path.join(__dirname, 'src', 'index.tpl'),
                contents: new Buffer('timestamp: {{$timestamp}}')
            }));
            stream.end();
        });
    });

}());
