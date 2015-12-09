var browserify  = require('browserify');
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');


var paths = ['./public/js/**/*.js'];

gulp.task('browserify', function() {
    return browserify({ entries: paths.browserify })
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});
