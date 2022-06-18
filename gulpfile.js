const gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  { parallel } = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require('gulp-concat')

// Html
function html() {
  return gulp
    .src("src/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
}

// CSS
function css() {
  return gulp
    .src("src/css/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"))
    .pipe(livereload());
}

// js
function js() {
  return gulp
  .src("src/js/**/*.js") 
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"));
}

exports.default = () => {
  require("./server.js");
  livereload.listen();
  gulp.watch(["src/**/*.*"], parallel(html, css, js));
};
