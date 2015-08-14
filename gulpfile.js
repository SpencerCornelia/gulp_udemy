var gulp = require("gulp");
var uglify = require("gulp-uglify");
var livereload = require("gulp-livereload");

// modifies styles
gulp.task("styles", function () {
	console.log("starting styles");
});

// modifies scripts
gulp.task("scripts", function () {
	console.log("starting scripts");
	gulp.src("public/js/main.js")
		.pipe(uglify())
		.pipe(gulp.dest("public/build/js/"));
});

// watches files
gulp.task("watch", function () {
	livereload.listen();

	gulp.watch("public/js/main.js", ["scripts"])
		.on("change", livereload.changed);

	gulp.watch("public/index.html").on("change", livereload.changed);	
});

// runs all gulp tasks
gulp.task("default", function () {
	gulp.start("styles", "scripts");
})