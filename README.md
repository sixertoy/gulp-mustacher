# gulp-mustacher [![Build Status](https://travis-ci.org/sixertoy/gulp-mustacher.svg?branch=master)](https://travis-ci.org/sixertoy/gulp-mustacher)

> My marvelous gulp plugin


## Install

```
$ npm install --save-dev gulp-mustacher
```


## Usage

```js
var gulp = require('gulp');
var mustacher = require('gulp-mustacher');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(mustacher())
		.pipe(gulp.dest('dist'));
});
```


## API

### mustacher(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [sixertoy](https://github.com/sixertoy)
