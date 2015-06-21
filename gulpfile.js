var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
	return gulp.src('**/*.spec.js', {
			read: false
		})
		.pipe(mocha({
			reporter: 'progress'
		}));
});

gulp.task('watch', function() {
	gulp.watch(['**/model/**/*.js', '**/test/**/*.js'], ['test']);
});