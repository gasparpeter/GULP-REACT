const {watch, task, src, dest} = require('gulp');
const babel = require('gulp-babel');

const watchJS = () => {

  return src('src/**/*.JS')
      .pipe(babel())
      .pipe(dest('./build'))
};

const startWatch = (cb) => {

  watch('src/**/*.js', watchJS)

};

task('default', startWatch);