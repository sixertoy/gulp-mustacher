/**
 *
 * Install Locals Dev
 * npm install gulp gulp-jshint jshint-stylish --save-dev
 *
 */
/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function () {

    'use strict';

    var // variables
        src = './src',
        dest = './build',
        // requires
        gulp = require('gulp'),
        path = require('path'),
        mustacher = require('gulp-mustacher');

    gulp.task('default', function () {
        gulp.src(path.join(src, '*.tpl'))
            .pipe(mustacher())
            .pipe(gulp.dest(dest));
    });

}());
