'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  html: __dirname + '/app/index.html',
  js: __dirname + '/app/js/client.js'
};


gulp.task('copy', () => {
  return gulp.src(paths.html)
  .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  return gulp.src(paths.js)
  .pipe(webpack({output:{filename:'bundle.js'}}))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy', 'bundle']);
