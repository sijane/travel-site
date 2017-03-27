const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      del = require('del'),
      usemin = require('gulp-usemin'),
      rev = require('gulp-rev'),
      cssnano = require('gulp-cssnano'),
      uglify = require('gulp-uglify'),
      browserSync = require('browser-sync').create()

gulp.task('previewDist', () => {
  browserSync.init({
     notify: false,
     server: {
        baseDir: "docs"  //dist
     }
  })
})

gulp.task('deleteDistFolder', ['icons'], () => {
  return del("./docs")  //dist
})

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));  //dist
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,   // for jpeg
      interlaced: true,    // for git
      multipass: true      // for svg
    }))
    .pipe(gulp.dest('./docs/assets/images'))  //dist
})

gulp.task('useminTrigger', ['deleteDistFolder'], () => {
  gulp.start('usemin')
})

gulp.task('usemin', ['styles', 'scripts'], () => {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [() => {return rev()}, () => {return cssnano()}],
      js: [() => {return rev()}, () => {return uglify()}]
    }))
    .pipe(gulp.dest('./docs'))  //dist
})

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger'])
