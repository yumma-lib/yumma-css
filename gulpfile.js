const { src, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const clean = require("gulp-clean-css");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const config = require("./yummacss.config.js");

const plugins = [
  autoprefixer(),
  purgecss({
    content: config.content,
    safelist: config.safelist,
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  }),
];

function standardFile() {
  return src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("yumma.css"))
    .pipe(postcss(plugins))
    .pipe(dest("dist"));
}

function minifiedFile() {
  return src("dist/yumma.css")
    .pipe(clean())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist"));
}

function coreFile() {
  return src("src/core.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("yumma-core.css"))
    .pipe(postcss(plugins))
    .pipe(dest("dist"));
}

function minifiedCoreFile() {
  return src("dist/yumma-core.css")
    .pipe(clean())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist"));
}

exports.standardFile = standardFile;
exports.minifiedFile = minifiedFile;
exports.coreFile = coreFile;
exports.minifiedCoreFile = minifiedCoreFile;

exports.default = series(
  standardFile,
  minifiedFile,
  coreFile,
  minifiedCoreFile
);
