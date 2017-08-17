var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// for html
var htmlmin = require("gulp-htmlmin");
var twig = require("gulp-twig");

// for css
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var uncss = require('gulp-uncss');

// default task for development
gulp.task("default", ["html", "sass", "fonts"], function(){
    // launch develop local server
    browserSync.init({
        server: "dist/"
    });

    // watch html files to reload browser
    gulp.watch(["src/*.html", "src/**/*.html"], ["html"]);

    // watch styles folder to compile sass files
    gulp.watch(["src/styles/*.scss", "src/styles/**/*.scss"], ["sass"]);

    // watch styles folder to copy fonts
    gulp.watch(["src/fonts/*"], ["fonts"]);
});

gulp.task("build", ["html", "sass", "fonts"]);

// compile html files
gulp.task("html", function(){
    gulp.src("src/*.html")
        // process template
        .pipe(twig())
        // minimize html files
        .pipe(htmlmin({collapseWhitespace: true})) 
        // copy to dist folder
        .pipe(gulp.dest("dist"))
        /// and reload browsers
        .pipe(browserSync.stream());
});


// compile css styles from sass files
gulp.task("sass", function(){
    gulp.src("src/styles/*.scss")
        // capture sourcemaps
        .pipe(sourcemaps.init())
        // compile sass
        .pipe(sass().on("error", sass.logError))
        .pipe(uncss({
            html: ["src/*.html", "src/components/*.html", "src/layouts/*.html", "src/includes/*.html"]
        }))
        .pipe(postcss([
            // add prefixes to old browsers compatibility
            autoprefixer(),
            // compress compiled css
            cssnano()
        ]))
        // save sourcemaps in css folder
        .pipe(sourcemaps.write("./"))
        // copy to dist folder
        .pipe(gulp.dest("dist/css/"))
        // and reload browsers
        .pipe(browserSync.stream());
});
    
// copy font files to dist
gulp.task("fonts", function(){
    gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts/"))
        .pipe(browserSync.stream());
});