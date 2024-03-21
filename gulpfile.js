const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');

function standardFile() {
    return src('yumma-css/**/*.scss')
        .pipe(sass())
        .pipe(rename('yumma.css'))
        .pipe(dest('dist'));
}

function minifiedFile() {
    return src('dist/yumma.css')
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'));
}

function watchFiles() {
    watch(['yumma-css/**/*.scss', '*.html'], series(standardFile, minifiedFile));
}

exports.standardFile = standardFile;
exports.minifiedFile = minifiedFile;
exports.watch = watchFiles;

exports.default = series(standardFile, minifiedFile, watchFiles);