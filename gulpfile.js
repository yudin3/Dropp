var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier');
var csso = require('gulp-csso');
var less = require('gulp-less');
var path = require('path');

gulp.task('minify', function() {
  gulp.src('')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''))
});

gulp.task('default', function () {
    return gulp.src('')
        .pipe(csso())
        .pipe(gulp.dest(''));
});

gulp.task('development', function () {
    return gulp.src('')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest(''));
});

gulp.task('less', function () {
    gulp.src('css/**/*.less')
    .pipe(less({
      paths: ['css'],
      filename: 'style.less'
    }))
    .pipe(gulp.dest('css'));
});
