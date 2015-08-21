# gulp-mustacher [![Build Status](https://travis-ci.org/sixertoy/gulp-mustacher.svg?branch=master)](https://travis-ci.org/sixertoy/gulp-mustacher)

> Provide an easy way to include handlebars (mustache) partials files inside HTML template page with a few helpers list like repeat, or, and...


## Install

```
npm install gulp-mustacher --save-dev
```


## Usage

```js
var gulp = require('gulp'),
    mustacher = require('gulp-mustacher');

gulp.task('default', function () {
    return gulp.src('src/html/*.tpl')
        .pipe(mustacher())
        .pipe(gulp.dest('build/html'));
});

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[coverall-url]: https://coveralls.io/r/sixertoy/grunt-mustacher
[coverall-img]: https://img.shields.io/coveralls/sixertoy/grunt-mustacher.svg?style=flat-square

[npm-url]: https://npmjs.org/package/grunt-mustacher
[npm-version-img]: http://img.shields.io/npm/v/grunt-mustacher.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/grunt-mustacher.svg?style=flat-square

[travis-url]: https://travis-ci.org/sixertoy/grunt-mustacher
[travis-img]: http://img.shields.io/travis/sixertoy/grunt-mustacher.svg?style=flat-square
