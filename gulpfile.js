const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');

function standardFile() {
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('yumma.css'))
        .pipe(dest('dist'));
}

function minifiedFile() {
    return src('dist/yumma.css')
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'));
}

function coreFile() {
    return src('src/core.scss') // Stylecent won't be included
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('yumma-core.css'))
        .pipe(dest('dist'));
}

function minifiedCoreFile() {
    return src('dist/yumma-core.css') // Stylecent won't be included
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'));
}

function watchFiles() {
    watch(['src/**/*.scss', '*.html'], series(standardFile, minifiedFile, coreFile, minifiedCoreFile));
}

exports.standardFile = standardFile;
exports.minifiedFile = minifiedFile;
exports.coreFile = coreFile;
exports.minifiedCoreFile = minifiedCoreFile;
exports.watch = watchFiles;

exports.default = series(standardFile, minifiedFile, coreFile, minifiedCoreFile, watchFiles);