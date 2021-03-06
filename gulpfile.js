/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var gulp 		 = require('gulp'),
	pug			 = require('gulp-pug'),
	stylus 		 = require('gulp-stylus'),
	browserSync  = require('browser-sync'),
	concat		 = require('gulp-concat'),
	uglify		 = require('gulp-uglify'),
	cssnano		 = require('gulp-cssnano'),
	rename		 = require('gulp-rename'),
	del			 = require('del'),
	imagemin 	 = require('gulp-imagemin'),
	pngquant	 = require('imagemin-pngquant'),
	cache 		 = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	uglifyES 	 = require('gulp-uglify-es').default;

gulp.task('stylus', function(){
	return gulp.src('src/stylus/**/*.styl')
		.pipe(stylus({
			'include css': true
		}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function(){
	return gulp.src('src/pug/**/!(_)*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
	return gulp.src([
		'src/vendor/jquery/jquery.min.js',
		'src/vendor/swiper/dist/js/swiper.min.js',
		'src/vendor/smoothscrolliOS/smoothscroll.js',
		'src/vendor/smoothscroll/smooth-scroll.polyfills.min.js',
		'src/vendor/inputmask/inputmask.dependencyLib.min.js',
		'src/vendor/inputmask/inputmask.min.js',
		'src/vendor/scroll-lock/scroll-lock.min.js',
		'src/vendor/tweenmax/src/minified/TweenMax.min.js',
		'src/vendor/rellax/rellax.min.js',
		'src/vendor/lodash/lodash.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js'));
});

gulp.task('css-libs', ['stylus'], function(){
	return gulp.src('src/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('build');
});

gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('img', function(){
	return gulp.src('src/images/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		})))
		.pipe(gulp.dest('build/images'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function(){
	gulp.watch('src/stylus/**/*.styl', ['stylus']);
	gulp.watch('src/pug/**/*.pug', ['pug']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);
	gulp.watch('src/css/*.css', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'stylus', 'pug', 'scripts'], function(){
	var buildCss = gulp.src([
		'src/css/style.css',
		'src/css/libs.min.css',
	])
		.pipe(gulp.dest('build/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('build/fonts'));

	var buildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('build/js'));

	var buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('build'));
});
