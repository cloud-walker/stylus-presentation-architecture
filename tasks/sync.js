import gulp from 'gulp'
import sync from 'browser-sync'
import {dest} from '../places'

gulp.task('sync', () => sync.init({
	open: false,
	server: dest
}))
