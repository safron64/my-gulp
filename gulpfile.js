const gulp = require('gulp')

//tasks
require('./gulp/dev.js')
require('./gulp/docs.js')

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel(
			'html:dev',
			'sass:dev',
			'img:dev',
			'fonts:dev',
			'files:dev',
			'js:dev'
		),
		gulp.parallel('server:dev', 'watch:dev')
	)
)

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel(
			'html:docs',
			'sass:docs',
			'img:docs',
			'fonts:docs',
			'files:docs',
			'js:docs'
		),
		gulp.parallel('server:docs')
	)
)
