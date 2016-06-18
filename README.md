<a name="description"></a>
# gulp-mustacher

[![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coverall-img]][coverall-url]

> **Gulp task build over [Mustacher module](https://www.npmjs.com/package/mustacher)**

> Designed for fit my own needs to build HTML static pages. Perfect for templating eZPublish, Magento, Drupal... CMS models

> It provide an easy way to **include** handlebar's partials files inside HTML template page with a minimal list of helpers like **repeat (loop)**, **or**, **and**.

<a name="exposed-helpers"></a>
### Exposed HTML/Handlebar's helpers

###### blocks helpers

* [repeat](https://github.com/sixertoy/mustacher#repeat)
* [and](https://github.com/sixertoy/mustacher#and)
* [or](https://github.com/sixertoy/mustacher#or)
* [equal](https://github.com/sixertoy/mustacher#equal)

###### inline helpers

* [$include](https://github.com/sixertoy/mustacher#include)
* [$image](https://github.com/sixertoy/mustacher#image)
* [$timestamp](https://github.com/sixertoy/mustacher#timestamp)
* [$livereload](https://github.com/sixertoy/mustacher#livereload)
* [$random](https://github.com/sixertoy/mustacher#random)
* [$ldim](https://github.com/sixertoy/mustacher#literals)
* [$rdim](https://github.com/sixertoy/mustacher#literals)

<a name="install"></a>
## Install

```
npm install gulp-mustacher --save-dev
```

<a name="usage"></a>
## Usage

`gulpfile.js`
```javascript
var gulp = require('gulp'),
    path = require('path'),
    mustacher = require('gulp-mustacher');

gulp.task('default', function () {
    var options = {
        partials: {
            ext: '.hbs',
            src: 'src/html/partials'
        }
    };
    return gulp.src(path.join('src', '*.tpl'))
        .pipe(mustacher(options))
        .pipe(gulp.dest('build/html'));
});
```

`src/html/index.tpl`
```html
<!DOCTYPE html>
<html lang="fr">

<head>
    ....
    <!-- include dist/css/bundle.css in a <link href="... -->
    {{$css 'css/bundle'}}
    <!--
    or include inline styles from a file
    {{$css 'dist/public/css/bundle' true}}
    -->
</head>

<body>

    <div id="before-body">
        ...
    </div>

    <!-- include src/html/partials/header.hbs -->
    {{$include 'header'}}

    <div id="main">
        <!-- include src/html/partials/contents/main.hbs -->
        {{$include 'contents/main'}}
    </div>

    <!-- include src/html/partials/footer.hbs -->
    {{$include 'footer'}}

    <div id="after-body">
        ...
    </div>

</body>

</html>
    
```

<a name="documentation"></a>
## More Documentation & Examples

> [Take a look at mustacher module for a full documentation](https://www.npmjs.com/package/mustacher)

<a name="issues"></a>
## Issues

**not yet implemented**

- Lorem Ipsum

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[coverall-url]: https://coveralls.io/r/sixertoy/mustacher
[coverall-img]: https://img.shields.io/coveralls/sixertoy/mustacher.svg?style=flat-square

[npm-url]: https://npmjs.org/package/gulp-mustacher
[npm-version-img]: http://img.shields.io/npm/v/gulp-mustacher.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/gulp-mustacher.svg?style=flat-square

[travis-url]: https://travis-ci.org/sixertoy/mustacher
[travis-img]: http://img.shields.io/travis/sixertoy/mustacher.svg?style=flat-square
