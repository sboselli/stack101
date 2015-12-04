var gulp        = require('gulp');
var server      = require('tiny-lr')();
var lrPort      = 35729;

gulp.task('lr', function(){
  server.listen(lrPort, function(err){
    if(err) {return console.error(err);}
  });
});
