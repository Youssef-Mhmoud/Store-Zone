const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  sourcemaps = require("gulp-sourcemaps"),
  // { parallel } = require("gulp"),
  pug = require("gulp-pug"),
  uglify = require("gulp-uglify"),
  // concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer")


// Html
function html() {
  return gulp
    .src("src/html/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("./dist"))
}

// CSS
function css() {
  return gulp
    .src(["src/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
}

// js
function js() {
  return gulp
    .src(["src/js/*.js", "src/js/*.js"])
    // .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
}

exports.default = () => {
  // gulp.watch(["src/**/*.*"], parallel(html, css, js));
  require('./server');
  gulp.watch(["src/html/**/*.pug"], html);
  gulp.watch(["src/css/**/*.scss"], css);
  gulp.watch(["src/js/**/*.js"], js);
};
