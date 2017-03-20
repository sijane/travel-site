const gulp = require('gulp'),
      watch = require('gulp-watch');
      browserSync = require('browser-sync').create();
      
gulp.task('watch', () => {

   browserSync.init({
      open: false,   // to not open a new window 
      notify: false,
      server: "app"
   })

   watch('./app/index.html', () => {
      browserSync.reload();
   })

   watch('./app/assets/styles/**/*.css', () => {
      gulp.start('cssInject')
   })

})

gulp.task('cssInject', ['styles'], () => {  // ['styles'] runs first then cssInject
   return gulp.src('./app/assets/styles/style.css')
      .pipe(browserSync.stream());   
})

