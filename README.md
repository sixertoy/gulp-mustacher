<a name="description"></a>
# gulp-mustacher

[![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coverall-img]][coverall-url]

> **Gulp task build over [Mustacher module](https://www.npmjs.com/package/mustacher)**

> Designed for fit my own needs to build HTML static pages. Perfect for templating eZPublish, Magento, Drupal... CMS models

> It provide an easy way to **include** handlebar's partials files inside HTML template page with a minimal list of helpers like **repeat (loop)**, **or**, **and**.

<a name="exposed-helpers"></a>
### Exposed HTML/Handlebar's helpers

###### inline

* [$include](https://github.com/sixertoy/mustacher#include)
* [$image](https://github.com/sixertoy/mustacher#image)
* [$timestamp](https://github.com/sixertoy/mustacher#timestamp)
* [$livereload](https://github.com/sixertoy/mustacher#livereload)
* [$random](https://github.com/sixertoy/mustacher#random)
* [$ldim](https://github.com/sixertoy/mustacher#literals)
* [$rdim](https://github.com/sixertoy/mustacher#literals)

###### blocks

* [repeat](https://github.com/sixertoy/mustacher#repeat)
* [and](https://github.com/sixertoy/mustacher#and)
* [or](https://github.com/sixertoy/mustacher#or)
* [equal](https://github.com/sixertoy/mustacher#equal)

<a name="documentation"></a>
## Documentation & examples

> [Take a look at mustacher module for a full documentation](https://www.npmjs.com/package/mustacher)

<a name="install"></a>
## Install

```
npm install gulp-mustacher --save-dev
```

<a name="usage"></a>
## Usage

```javascript
var gulp = require('gulp'),
    path = require('path'),
    mustacher = require('gulp-mustacher');

gulp.task('default', function () {
    return gulp.src(path.join('src', '*.tpl'))
        .pipe(mustacher())
        .pipe(gulp.dest('build/html'));
});
```

### Usage, build a markdown toc

```javascript
gulp.task('build:hbs', function () {
var options = {
        context: {
            pages: filenames.get('markdown')
        }
    },
    sources = path.join(src, 'assets', '*.hbs');
return gulp.src(sources)
    .pipe(mustacher(options))
    .pipe(gulp.dest(path.join(build_directory)));
});

gulp.task('build:toc', function () {
    var sources = path.join(src, 'readme', 'pages', '*.md');
    return gulp.src(sources)
        .pipe(filenames('markdown'));
});

gulp.task('build', function (cb) {
    runSequence('build:toc', 'build:hbs', cb);
});
```

> In src/assets/_footer.hbs

```html
    <!-- endof content -->
    </article>

    <nav>
        <!-- table of content -->
        {{#each pages}}
        <a href="pages/{{this}}"><span>{{this}}</span></a>
        {{/each}}
    </nav>

    <div class="after-body">
    <!-- scripts -->
    </div>

</body>

</html>
```

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
