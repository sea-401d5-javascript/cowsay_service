const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

const paths = {
  html: './app/**/*.html',
  js: './app/js/client.js'
};

gulp.task('bundle', ['clean'], () => {
  return gulp.src(paths.js)
    .pipe(webpack({output:{filename: 'bundle.js'}}))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return del('./build/**/*');
});

gulp.task('copy', ['clean'],() => {
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', () => {
  gulp.src('./app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['bundle', 'clean', 'copy']);
