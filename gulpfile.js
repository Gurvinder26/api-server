const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// pull in the project Typescript config
const tsProject = ts.createProject('tsconfig.json');
//task to be run when the watcher detects changes
gulp.task('build', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject())
    .js
    //.pipe(concat('server.js'))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
  return tsResult;
});





// //set up a watcher to watch over changes
// gulp.task('watch', ['scripts'], () => {
//   gulp.watch('**/*.ts', ['scripts']);
// });

// gulp.task('default', ['watch']);