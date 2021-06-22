const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-dart-sass');

function css() {
    return gulp
        .src('css/main.sass')
        .pipe(autoPrefixer({
            overrideBrowserslist : ['last 2 versions'],
            cascade : false
        }))
        .pipe(sass({
            outputStyle : 'expanded',
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    gulp.watch('css/*.sass', css);
}

// registrar funciones como tarea
gulp.task('css', css);
gulp.task('watch', watchFiles);