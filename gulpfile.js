const {watch, task} = require('gulp');
const babel = require('gulp-babel');

const startWatch = (cb) => {
  console.log(cb);
  cb();
};

task('default', startWatch);