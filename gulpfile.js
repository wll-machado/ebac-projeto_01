const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}


function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function fDefaults(cb) {
    console.log('funcao padrao');
    cb();
}

function startG(cb){
    console.log('start gulp');
    runG();
    cb()
}

function runG(){
    console.log('running gulp');
}

exports.default = fDefaults;

exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', gulp.series(compilaSass))
}

exports.js = comprimeJs;