var gulp = require('gulp');
var uglify = require('gulp-uglify');
var strip = require('gulp-strip-comments');
var rename = require('gulp-rename');

gulp.task('default', function () {
	gulp.src(['./src/tabitha.js'])
	.pipe(uglify())
	.pipe(rename('tabitha.min.js'))
	.pipe(gulp.dest('./dist'));
	gulp.src(['./src/tabitha.js'])
	.pipe(strip())
	.pipe(gulp.dest('./dist/'));
});
