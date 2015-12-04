var gulp        = require('gulp');
var server      = require('tiny-lr')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "localhost:5000",
        files: ["public/**/*.*"],
        reloadDelay: 250,
    });
});