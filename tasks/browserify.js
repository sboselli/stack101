var browserify  = require('browserify');
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');

var paths = ['public/js/main.js'];

gulp.task('browserify', function() {
    return browserify({ entries: paths })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});
