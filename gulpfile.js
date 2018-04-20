var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    flatten = require('gulp-flatten'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();


// Production
var uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin');


// Paths
const src = 'src';
const dist = 'assets';


///// Live reload //////
gulp.task('browserSync', function() {
  browserSync.init({
    port: 8080,
    open: "external",
    server: {
      baseDir: './'
    }
  })
});


///// HTML transporter //////
gulp.task('htmlTrans', function() {
  return gulp.src([src + '/index.html',])
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


///// Compile Sass /////
gulp.task('compileSass', function () {
  return gulp.src(src + '/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dist + '/' + '/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


///// Compile JS /////
gulp.task('compileJS', function() {
    return gulp.src(src + '/scripts/index.js')
    .pipe(webpackStream({
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ],
      },
      output: {
        filename: 'index.js',
      }
    }, webpack))
    .pipe(gulp.dest(dist + '/' + '/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


///// Minify JS /////
gulp.task('MinifyJS', ['compileJS'], function() {
  gulp.src(dist + '/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(dist + '/scripts'))
});


///// Set prefixes /////
gulp.task('setPrefixes', function(){
  return gulp.src(dist + '/styles/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(dist + '/styles'))
});


///// Minify CSS /////
gulp.task('minifyCSS', ['setPrefixes'], function () {
  return gulp.src(dist + '/styles/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist + '/styles'))
});


///// Minify HTML /////
gulp.task('minifyHTML', function() {
  return gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});


///// Watch /////
gulp.task('default', [
                      'browserSync',
                      'htmlTrans',
                      'compileSass',
                      'compileJS'
                      ],
  function() {
    gulp.watch([src + '/*.html'], ['htmlTrans']);
    gulp.watch([src + '/**/*.scss', src + '/index.scss'], ['compileSass']);
    gulp.watch([src + '/**/*.js', src + '/index.js'], ['compileJS']);
});


///// Production /////
gulp.task('prod', 
  [
  'htmlTrans',
  'compileSass',
  'compileJS',
  'MinifyJS',
  'setPrefixes',
  'minifyCSS',
  'minifyHTML'
  ]
);