const {watch, task, src, dest} = require('gulp');
const babel = require('gulp-babel');

const buildFirst = () => {
    return src('src/**/*.JS')
        .pipe(babel())
        .pipe(dest('./build'))

};

const watchJS = () => {

  return src('src/**/*.JS')
      .pipe(babel())
      .pipe(dest('./build'))
};

const startWatch = () => {
  watch( 'src/**/*.js',  watchJS );
};

task('default', series(buildFirst, startWatch));