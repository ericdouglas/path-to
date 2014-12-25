var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');

function lintHandler() {
  return gulp
           .src(['./index.js', './test/*.js'])
           .pipe(jshint())
           .pipe(jshint.reporter(stylish));
}
gulp
  .task('lint', lintHandler);

function testHandler() {
  return gulp
           .src(['./test/*.js'])
           .pipe(mocha({ reporter: 'spec' }));
}
gulp
  .task('test', testHandler);

gulp
  .task('default', ['lint', 'test']);
