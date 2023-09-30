const { src, dest, watch, series } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const copy = require('gulp-copy');

function buildStyles() {
    return src('yumma-css/**/*.scss')
        .pipe(sass())
        .pipe(rename('yumma.css'))
        .pipe(dest('dist'));
}

function copyStyles() {
    return src('dist/yumma.css')
        .pipe(copy('./public/css', { prefix: 1 }));
}

function watchTask() {
    watch(['yumma-css/**/*.scss', '*.html'], series(buildStyles, copyStyles));
}

exports.buildStyles = buildStyles;
exports.copyStyles = copyStyles;
exports.watch = watchTask;

exports.default = series(buildStyles, copyStyles, watchTask);
