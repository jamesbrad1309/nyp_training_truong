var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
  return gulp.src('precompile/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
});

gulp.task('watch',['browserSync','sass'],function(){
  gulp.watch('precompile/**/*.sass',['sass']);
  gulp.watch('**/*.html',browserSync.reload);
});

gulp.task('default',['watch']);
