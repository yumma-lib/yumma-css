const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');

function buildStyles() {
    return src('yumma-css/**/*.scss')
        .pipe(sass())
        .pipe(rename('yumma.css'))
        .pipe(dest('dist'));
}

function minifyStyles() {
    return src('dist/yumma.css')
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'));
}

function watchTask() {
    watch(['yumma-css/**/*.scss', '*.html'], series(buildStyles, minifyStyles));
}

exports.buildStyles = buildStyles;
exports.minifyStyles = minifyStyles;
exports.watch = watchTask;

exports.default = series(buildStyles, minifyStyles, watchTask);
