import gulp from 'gulp'
import pug from 'gulp-pug'
import sync from 'browser-sync'
import watch from 'gulp-watch'
import {src, dest} from '../places'

gulp.task('html', () =>
	gulp.src(`${src}/index.pug`)
		.pipe(pug())
		.pipe(gulp.dest(dest))
		.pipe(sync.stream())
)

gulp.task('html:watch', () =>
	watch(`${src}/index.pug`, () => gulp.start('html'))
)
