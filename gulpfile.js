var gulp        = require('gulp');
var sequence    = require('gulp-sequence');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var requireDir  = require('require-dir');
var tasks       = requireDir('./tasks', { recurse: true });

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