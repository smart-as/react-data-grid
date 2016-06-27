var gulp      = require("gulp");
var gutil     = require("gulp-util");
var bundle   = require("./bundle");
var uglify = require('gulp-uglify');
var webpackConfig = require("../../config/webpack.js");
var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task("dist", function(callback) {

  var onBundle = function(){
    gulp.src('dist/i-grid-with-addons.js')
    .pipe(uglify())
    .pipe(rename('i-grid-with-addons.min.js'))
    .pipe(gulp.dest('dist'))
    .on('error', gutil.log)

    gulp.src('dist/i-grid.js')
    .pipe(uglify())
    .pipe(rename('i-grid.min.js'))
    .pipe(gulp.dest('dist'))
    .on('error', gutil.log)
    callback();
  }

  bundle(Object.create(webpackConfig), onBundle);



});
