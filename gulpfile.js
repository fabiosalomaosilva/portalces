var gulp = require('gulp');
var uglifyjs = require('gulp-uglifyjs');
var minifyHtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var livereload = require('gulp-livereload');

var jsFiles = 'js/**/*.js',
    jsDest = 'public/js',
    cssFiles = 'css/*.scss',
    cssDest = 'public/css',
    htmlFiles = 'views/**/*.html',
    htmlDest = 'public/views';

gulp.task('libs', function () {
    return gulp.src(jsFiles)
        .pipe(rename('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglifyjs())
        .pipe(gulp.dest(jsDest))
        .pipe(livereload());
});

gulp.task('sass', function () {
    return gulp.src(cssFiles)
        .pipe(rename('site.min.js'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(livereload());
});

gulp.task('indexHtml', function () {
    var opts = { empty: true };
    gulp.src('index.html')
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});

gulp.task('viewsHtml', function () {
    var opts = { empty: true };
    gulp.src('views/**/*.html')
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest('public/views'))
        .pipe(livereload());
});
gulp.task('sassWatch', function () {
    livereload.listen();
    gulp.watch(cssFiles, ['sass']);
});

gulp.task('htmlWatch', function () {
    livereload.listen();
    gulp.watch(['index.html', 'views/**/*.html'], ['indexHtml', 'viewsHtml']);
});

gulp.task('libsWatch', function () {
    livereload.listen();
    gulp.watch(jsFiles, ['libs']);
});

gulp.task('default', ['libs', 'sass', 'sassWatch', 'indexHtml', 'viewsHtml', 'htmlWatch', 'libsWatch']);