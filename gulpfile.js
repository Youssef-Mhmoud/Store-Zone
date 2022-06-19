const gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  sass = require("gulp-sass")(require("sass")),
  sourcemaps = require("gulp-sourcemaps"),
  // { parallel } = require("gulp"),
  pug = require("gulp-pug"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer");

// Html
function html() {
  return gulp
    .src("src/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
}

// CSS
function css() {
  return gulp
    .src(["src/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
    .pipe(livereload());
}

// js
function js() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(livereload());
}

exports.default = () => {
  require("./server.js");
  livereload.listen();
  // gulp.watch(["src/**/*.*"], parallel(html, css, js));
  gulp.watch(["src/html/**/*.pug"], html);
  gulp.watch(["src/css/**/*.scss"], css);
  gulp.watch(["src/js/**/*.js"], js);
};
