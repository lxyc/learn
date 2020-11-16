const { src, dest, series } = require("gulp");
const rename = require("gulp-rename");
const del = require("del");

function cleanTask() {
  return del("output/**");
}

function renameTask() {
  return src("src/*.js")
    .pipe(rename({ prefix: "xyc-" }))
    .pipe(dest("output/"));
}

exports.default = series(cleanTask, renameTask);
