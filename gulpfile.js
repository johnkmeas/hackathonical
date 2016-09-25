var gulp = require('gulp'),
jade = require('gulp-jade'),
sass = require('gulp-sass');
 
gulp.task('default', ['jaded', 'style'], function(){
	gulp.watch('lib/**/*.jade', ['jaded']);
	gulp.watch('sass/**/*.scss',['style']);
})

gulp.task('jaded', function(){
	gulp.src('./lib/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./'))
})

gulp.task('style', function(){
	return gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'))
})