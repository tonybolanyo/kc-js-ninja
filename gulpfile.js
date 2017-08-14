var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// for html
var htmlmin = require("gulp-htmlmin");

// default task for development
gulp.task("default", ["html"], function(){
    // launch develop local server
    browserSync.init({
        server: "dist/"
    });

    // watch html files to reload browser
    gulp.watch(["src/*.html", "src/**/*.html"], ["html"]);

});

// compile html files
gulp.task("html", function(){
    gulp.src("src/*.html")
        // minimize html files
        .pipe(htmlmin({collapseWhitespace: true})) 
        // copy to dist folder
        .pipe(gulp.dest("dist"))
        /// and reload browsers
        .pipe(browserSync.stream());
});
