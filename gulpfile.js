var gulp = require("gulp");
var uglify = require("gulp-uglify");

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
	gulp.watch("public/js/main.js", function () {
		gulp.start("scripts");
	});
});

// runs all gulp tasks
gulp.task("default", function () {
	gulp.start("styles", "scripts");
})