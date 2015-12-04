var gulp        = require('gulp');
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