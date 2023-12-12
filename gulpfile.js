const gulp = require("gulp");
// const rename = require('gulp-rename');
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const ts = require('gulp-typescript');


// function js(cb) {
//   gulp.src("./src/*.ts")
//     .pipe(ts())
// 		// .pipe(babel({
// 		// 	presets: ['@babel/preset-env']
// 		// }))
// 		.pipe(gulp.dest('script'))
// }



function css(cb) {
  return (
    gulp
      .src("./src/*.scss")
      .pipe(sass().on("error", sass.logError))
      // .pipe(concat('main.css'))
      .pipe(
        cleanCSS({
          // format: 'beautify',
          compatibility: "ie10",
          level: 2,
          // inline: ['none'],
          removeDuplicateRules: true,
        })
      )

      // .pipe(rename('build.css'))
      .pipe(gulp.dest("./styles"))
  );
}

exports.default = function () {
  // You can use a single task
  gulp.watch("src/*.scss", css);
  // Or a composed task
  // gulp.watch("src/*.ts", js);
};
