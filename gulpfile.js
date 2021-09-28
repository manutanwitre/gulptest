const gulp = require("gulp");
const plug = {
	debug: require("gulp-debug"),
	md5: require("gulp-md5"),
};

const md5Test = () => gulp.src("gulpfile.js")
	.pipe(plug.md5({printOnly: true}))
	.pipe(plug.debug({title: "md5:"}));

gulp.task("default", md5Test);
