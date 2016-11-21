'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const buildStyle = () => {
  gulp.src('style/site.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('static/css/'));
};

gulp.task("default", buildStyle);

gulp.task("watch", () => {
  gulp.watch('style/site.scss', buildStyle);
});
