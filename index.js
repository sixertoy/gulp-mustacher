/*jslint indent: 4 */
/*globals require, module, Buffer */
(function () {

    'use strict';

    var gutil = require('gulp-util'),
        through = require('through2'),
        mustacher = require('mustacher');

    module.exports = function (options) {
        /*
        if (!options.foo) {
            throw new gutil.PluginError('gulp-mustacher', '`foo` required');
        }
        */
        /*
        return through.obj(function (file, enc, cb) {
            if (file.isNull()) {
                cb(null, file);
                return;
            }
            if (file.isStream()) {
                cb(new gutil.PluginError('gulp-mustacher', 'Streaming not supported'));
                return;
            }
            try {
                file.contents = new Buffer(someModule(file.contents.toString(), options));
                this.push(file);
            } catch (err) {
                this.emit('error', new gutil.PluginError('gulp-mustacher', err));
            }
            cb();
        });
        */
    };
}());

