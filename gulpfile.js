'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var less = require('gulp-less');
var jade = require('gulp-jade');

gulp.task('less', function () {
	return gulp.src('./less/*.less')
		.pipe(less())
		.pipe(concatCss("./style.css"))
		.pipe(gulp.dest('./'));
});

gulp.task('jade', function() {
	return gulp.src('./*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./'))
});


gulp.task('watch', function () {
	gulp.watch('./less/**/*.less', ['less']);
	gulp.watch('./*.jade', ['jade']);
});

