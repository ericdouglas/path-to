var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

function lintHandler() {
  return gulp
           .src(['./index.js', './test/*.js'])
           .pipe(jshint())
           .pipe(jshint.reporter(stylish));
}
gulp
  .task('lint', lintHandler);
