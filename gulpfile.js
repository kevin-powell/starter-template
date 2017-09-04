const gulp = require('gulp'),
       browserSync = require('browser-sync').create(),
       sass = require('gulp-sass'),
       autoprefixer = require('gulp-autoprefixer'), 
       concat = require('gulp-concat'),
       imagemin = require('gulp-imagemin'),
       cache = require('gulp-cache'),
       del = require('del'),
       runSequence = require('run-sequence');

// Static server & watch scss + html files
gulp.task('watch', ['sass'], function() {

  browserSync.init({
    server: './src'
  });

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);

});

// Compile Sass into CSS & inject into browsers
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});


// default will also watch
gulp.task('default', ['watch']);


// Concatenate & minify JS
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
})

// Auto prefix & minify CSS
gulp.task('css', function() {
  const plugins = [
    autroprefixer({browsers: ['last 2 versions']}),
    cssnano()
  ];
  return gulp.src('src/main.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('/dist/css'))
})

// Optimize images
gulp.task('images', function() {
  return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
})

// Move HTML files to dist
gulp.task('html', function() {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'))
})

// Clean up the dist folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('build', function(callback) {
  runSequence('clean:dist', 'sass',
    ['scripts', 'css', 'images', 'html'])
});

gulp.task('build', ['clean','scripts', 'css', 'images']);