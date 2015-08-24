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
            var compiled;
            if (vinyl.isNull()) {
                cb(null, vinyl);
                return;
            }
            if (vinyl.isStream()) {
                cb(new gutil.PluginError('gulp-mustacher', 'Streaming not supported'));
                return;
            }
            try {
                // replace tpl extension
                vinyl.path = gutil.replaceExtension(vinyl.path, '.html');
                // compile content
                compiled = mustacher(vinyl.contents.toString(), {});
                // write vinyl
                vinyl.contents = new Buffer(compiled, options);
                this.push(vinyl);
                // log & return
                process.stdout.write(chalk.gray('write: ' + path.normalize(vinyl.path)) + '\n');
                cb(null, vinyl);
                
            } catch (err) {
                this.emit('error', new gutil.PluginError('gulp-mustacher', err));
            }

        });
    };
}());