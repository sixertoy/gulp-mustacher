/*jslint indent: 4 */
/*globals require, module, Buffer, process */
(function () {

    'use strict';

    var // requires
        path = require('path'),
        chalk = require('chalk'),
        gutil = require('gulp-util'),
        through = require('through2'),
        mustacher = require('mustacher');

    module.exports = function (options) {
        /*
        if (!options.foo) {
            throw new gutil.PluginError('gulp-mustacher', '`foo` required');
        }
        */
        return through.obj(function (vinyl, enc, cb) {
            var output, str, context;
            if (vinyl.isNull()) {
                cb(null, vinyl);
                return;
            }
            if (vinyl.isStream()) {
                cb(new gutil.PluginError('gulp-mustacher', 'Streaming not supported'));
                return;
            }
            try {
                str = vinyl.contents.toString();
                output = mustacher(str, context);
                vinyl.contents = new Buffer(output, options);
                process.stdout.write(chalk.gray('write: ' + path.normalize(vinyl.path)));
                this.push(vinyl);
            } catch (err) {
                this.emit('error', new gutil.PluginError('gulp-mustacher', err));
            }
            return through.obj(function (file, enc, cb) {
                cb();
            });
        });
    };
}());
