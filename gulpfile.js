var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');

var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var lessify = require('node-lessify');

var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('build', function() {
    browserify('./src/app.js')
        .transform(babelify)
        .transform(reactify)
        .transform(lessify)
        .bundle()
          .on('error', function(err) {
              gutil.log(err);
          })
        .pipe(source('./src/app.js'))
        .pipe(streamify(concat('bundle.js')))
        .pipe(streamify(uglify({
            mangle: true,
        })))
        .pipe(gulp.dest('dist'))
})

gulp.task('less', function() {
    gulp.src('./src/components/**/*.less')
        .pipe(less({
            plugins: [autoprefix, cleancss]
        }))
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./assets/css'))
})

gulp.task('server', function() {
    connect.server({
        root: [__dirname],
        livereload: true
    });    
})

gulp.task('reload', function() {
    gulp.src('dist/bundle.js')
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch('src/**/*', ['build', 'less', 'reload'])
})

gulp.task('assets', function() {
    gulp.src('assets/**/*')
        .pipe(gulp.dest('dist/assets'))
})

gulp.task('default', ['build', 'less'])
gulp.task('develop', ['server', 'watch'])
gulp.task('prod', ['build', 'less', 'assets']);

