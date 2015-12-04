var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var plumber     = require('gulp-plumber');

var paths = ['.app.js',
             './lib/**/*.js',
             './routes/**/*.js',
             './public/js/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});