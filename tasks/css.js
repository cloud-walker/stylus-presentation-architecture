import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import stylus from 'gulp-stylus'
import postcss from 'gulp-postcss'
import use from 'postcss-use'
import sync from 'browser-sync'
import watch from 'gulp-watch'
import {src, dest} from '../places'

const errorHandler = notify.onError({
	title: 'CSS Error',
	message: '<%= error.message %>'
})

gulp.task('css', () =>
	gulp.src(`${src}/main.styl`)
		.pipe(plumber({errorHandler}))
		.pipe(stylus({
			'include css': true,
			include: 'node_modules'
		}))
		.pipe(postcss([use({modules: '*'})]))
		.pipe(gulp.dest(dest))
		.pipe(sync.stream())
)

gulp.task('css:watch', () =>
	watch(`${src}/**/*.styl`, () => gulp.start('css'))
)
