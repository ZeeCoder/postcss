'use strict';

var gulp  = require('gulp');
var watch = require('gulp-watch');
var del   = require('del');

gulp.task('css', function () {
    // del.sync('./web/css');
    var postcss = require('gulp-postcss');

    return gulp.src('front_src/styles/*.css')
        .pipe(postcss([
            require('precss')({ /* options */ }),
            require('autoprefixer')
        ]))
        .pipe(gulp.dest('./web/css'));
});

gulp.task('watch', function() {
    watch('front_src/styles/**/*.css', function () {
        gulp.start('css');
    });
});
