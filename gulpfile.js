const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

const paths = {
	sass: 'static/assets/stylesheet/components/*.scss'
};

gulp.task('images', function(){
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
});


gulp.task('sass', function() {
	return gulp.src('static/assets/stylesheet/components/major.scss')
		.pipe(sass({
			paths: ['static/assets/stylesheet/components'],
			compress: true,
		}))
		.pipe(gulp.dest('static/assets/stylesheet'));
});

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch', 'images']);