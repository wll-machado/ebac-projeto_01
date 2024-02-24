const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');


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

// gulp.task('imagem', () =>
//     gulp.src('./source/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('images'))
// );

exports.default = gulp.parallel(compilaSass,comprimeJs);

exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', gulp.series(compilaSass))
}

exports.js = comprimeJs;