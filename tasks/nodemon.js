var browserify  = require('browserify');
var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
  var called = false;

  var opts = {
    ignore: ["public/*",
             "views/*"],
    script: ''
  }

  return nodemon(opts).on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  // .on('restart', function() {
  //   reload;
  // });
});