var gulp = require('gulp');
var clean_css = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

gulp.task('js', function() {
    return gulp.src('js/main.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('css', function() {
    return gulp.src('css/style.css')
        .pipe(clean_css({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['js', 'css'], function() {

});
