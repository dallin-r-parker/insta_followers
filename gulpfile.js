const gulp = require('gulp')
const prettier = require('gulp-prettify')

const src = {
	jsSrc: './server/**/*.js'
}


gulp.task('pretty', () => {
	return gulp.src(src.jsSrc)
		.pipe(prettier())
		.pipe(gulp.dest('./server/build'))
})

gulp.task('default', ['pretty'])
