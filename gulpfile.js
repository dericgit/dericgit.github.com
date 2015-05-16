/**
 * @Date    : 15/5/9
 * @Author  : derek
 * @Version : v1.0.0
 * Change by derek on 15/5/9.
 */

/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    //imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    //livereload = require('gulp-livereload'),
    del = require('del');
    //size = require('gulp-size'),
    //pngquant = require('imagemin-pngquant');

// Styles
gulp.task('styles', function() {
    return gulp.src('css/vendor.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src('js/vendor.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'js complete' }));
});

//html
gulp.task('html', function(){
    return gulp.src('tpls/**/*.html')
        .pipe(concat('tpl.html'))
        .pipe(gulp.dest('dist/'))
        .pipe(notify({message: 'html concat complete'}));
});

// Images
// gulp.task('images', function() {
//     return gulp.src('img/**/*')
//         //.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//         .pipe(imagemin({
//             progressive: true,//jpg
//             interlaced: true,//gif
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('dist/img'))
//         .pipe(notify({ message: 'Images task complete' }));
// });

// Clean
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/tpl.html'], cb)
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'html');
});

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('css/**/*.css', ['styles']);
    // Watch .js files
    gulp.watch('js/**/*.js', ['scripts']);
    // Watch image files
    //gulp.watch('img/**/*', ['images']);
    // Create LiveReload server
    //livereload.listen();
    // Watch any files in dist/, reload on change
    //gulp.watch(['dist/**']).on('change', livereload.changed);
});
