var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var notify = require("gulp-notify");

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

// for JavaScript
var tap = require("gulp-tap");
var browserify = require("browserify");
var buffer = require("gulp-buffer");
var uglify = require("gulp-uglify");

// default task for development
gulp.task("default", ["build"], function(){
    // launch develop local server
    browserSync.init({
        proxy: "http://127.0.0.1:3003/"
    });

    // watch html files to reload browser
    gulp.watch(["src/*.html", "src/**/*.html"], ["html"]);

    // watch styles folder to compile sass files
    gulp.watch(["src/styles/*.scss", "src/styles/**/*.scss"], ["sass"]);

    // watch styles folder to copy fonts
    gulp.watch(["src/fonts/*"], ["fonts"]);

    // watch js folder to compile JavaScript files
    gulp.watch(["src/js/*.js", "src/js/++/+.js", "js"])
});

gulp.task("build", ["html", "sass", "fonts", "js"]);

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

// compile and generate inly one js file
gulp.task("js", function(){
    gulp.src("src/js/main.js")
        // tap allows to apply a function to every file
        .pipe(tap(function(file){
            // replace content file with browserify result
            file.contents = browserify(file.path, { debug: true })          // new browserify instance
                            .transform("babelify", { presets: ["es2015"] }) // ES6 -> ES5
                            .bundle()                                       // compile
                            .on("error", function(error){                   // treat errors
                                return notify().write(error);
                            });
        }))
        // back file to gulp buffer to apply next pipe
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // minimize and ofuscate JavaScript file
        .pipe(uglify())
        // write sourcemap o same directory
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/js/"))
        // and reload browsers
        .pipe(browserSync.stream())
});