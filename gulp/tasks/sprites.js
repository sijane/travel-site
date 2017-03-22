const gulp = require('gulp'),
		svgSprite = require('gulp-svg-sprite'), // create object literal
		rename = require('gulp-rename'),
		del = require('del');

const config = {
	mode: {
		css: {
			sprite: 'sprite.svg',  // url('/temp/sprite/css/svg/sprite-0f9283b3.svg')	
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', () => {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
})

gulp.task('createSprite', ['beginClean'], () => {  // be sure to call 'gulp createSprite' in terminal
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
})

gulp.task('copySpriteGraphic', ['createSprite'], () => {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySpriteCSS', ['createSprite'], () => {  // add [] so that create before copy  
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
})

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
	return del('./app/temp/sprite')
})

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'])  // they inside [] will run at the same time