var browserify  = require('browserify');
var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var nodemon     = require('gulp-nodemon');
var plumber     = require('gulp-plumber');
var sequence    = require('gulp-sequence');
var watch       = require('gulp-watch');
var source      = require('vinyl-source-stream');
var server      = require('tiny-lr')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var lrPort      = 35729;

var requireDir  = require('require-dir');
var tasks       = requireDir('./tasks');

var paths = {
  watch:      ["./views/**/*.ejs",
               "./public/js/**/*.js",
               "./public/css/**/*.css",
               "./public/img/**/*.*"]
};

gulp.task('build', ['lint', 'browserify'], function() {});
gulp.task('serve', sequence('build', 'lr', 'browser-sync'));
gulp.task('default', ['serve'], function () {
  watch(paths.watch, reload);
});