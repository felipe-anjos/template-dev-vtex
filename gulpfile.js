'use strict';

const gulp = require('gulp');
const { watch } = require('gulp')
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
let projectName = 'aw-store'; //name for CSS and JS compress
sass.compiler = require('node-sass');

gulp.task('default', escutando);

function compilaSass (){
    return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat(projectName + '.css'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("arquivos"));
}
function scriptsMethod(){
    return gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(concat(projectName + '.js'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('arquivos'))
}
function escutando(){
    watch('src/scss/**/*.scss', compilaSass);
    watch('src/js/**/*.js', scriptsMethod);
}