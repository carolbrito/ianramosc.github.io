var gulp = require('gulp')
	,	jade = require('gulp-jade')
	,	stylus = require('gulp-stylus');

gulp.task('html', function() {
	gulp.src('./dev/jade/*.jade')
		.pipe(jade({
			locals: './'
		}))
		.pipe(gulp.dest('./'))
});

gulp.task('css', function() {
	gulp.src('./dev/css/main.styl')
		.pipe(stylus({
			compress: true
		}))
		.pipe(gulp.dest('./stylesheets'))
});

gulp.task('default', ['html', 'css'], function() {
	gulp.watch('./dev/jade/*.jade', 	['html']);
	gulp.watch('./dev/css/main.styl', ['css']);
});