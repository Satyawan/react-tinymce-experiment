var gulp = require("gulp");
var watch = require('gulp-watch');
var browserify = require("gulp-browserify");

var onError = function (error) {
    console.log(error.message);
};

gulp.task("build", function () {

    gulp.src("src/html/**")
        .pipe(gulp.dest("build"));

    gulp.src("src/tinymce/**")
        .pipe(gulp.dest("build"));

    gulp.src('src/js/main.js', {read: false})
        .pipe(browserify({
            transform: ['reactify'], // implies that the module 'reactify' is installed
            extensions: ['.jsx'], // you can omit the extension when requiring
            insertGlobals : true,
            debug : true,
            shim: {
                tinymce: {
                    path: 'node_modules/tinymce/tinymce.min.js',
                    exports: 'tinymce'
                }
            }
        })).on("error", onError)
        .pipe(gulp.dest("build"));
});

gulp.task("watch", ["build"], function () {
    watch(["src/**"], [ "build" ]);
});

gulp.task("default", [ "build"]);