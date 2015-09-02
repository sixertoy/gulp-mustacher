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
        src = './spec/fixtures',
        dest = './spec/tmp',
        // requires
        gulp = require('gulp'),
        path = require('path'),
        bump = require('gulp-bump'),
        jshint = require('gulp-jshint'),
        mustacher = require('./index');

    gulp.task('bump', function () {
        gulp.src('./package.json')
            .pipe(bump())
            .pipe(gulp.dest('./'));
    });

    /**
     *
     * with exotic delimiters
     *
     */
    gulp.task('exotic', function () {
        gulp.src([path.join(src, 'exotic.tpl')])
            .pipe(mustacher({
                delimiter: {
                    ldim: '[*',
                    rdim: '*]'
                }
            }))
            .pipe(gulp.dest(dest));
    });

    /**
     *
     * with partials defined
     * and a global context
     *
     */
    gulp.task('include', function () {
        gulp.src([path.join(src, 'include.tpl')])
            .pipe(mustacher({
                partials: {
                    src: './spec/fixtures/partials',
                    ext: '.hbs'
                },
                context: {
                    inside: 'a template'
                }
            }))
            .pipe(gulp.dest(dest));
    });

    gulp.task('no_options', function () {
        gulp.src([path.join(src, '*.tpl'), '!' + path.join(src, 'exotic.tpl')])
            .pipe(mustacher())
            .pipe(gulp.dest(dest));
    });

    gulp.task('default', ['no_options', 'exotic', 'include']);

}());
