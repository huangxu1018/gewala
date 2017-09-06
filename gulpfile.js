/**
 * Created by  on 2017/8/24.
 */
var gulp =require("gulp");
var uglify =require("gulp-uglify");
var cleanCSS =require("gulp-clean-css");
var htmlmini =require("gulp-minify-html");
var less =require("gulp-less");
var browsersync =require("browser-sync").create();
var reload =browsersync.reload;
gulp.task("consol",function () {
    gulp.src("./gulp_demo02/index.html")
        .pipe(gulp.dest("./dist/html"))
});
gulp.task("myuglify",function () {
    gulp.src("gulp_demo01/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./src/js"))
});
gulp.task("minify-css",function () {
    gulp.src("gulp_demo01/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist/css"))
});
gulp.task("minify-html",function () {
    gulp.src("gulp_demo01/*.html")
        .pipe(htmlmini())
        .pipe(gulp.dest("./dist/html"))
});
gulp.task("myless",function () {
    gulp.src("gulp_demo01/*.less")
        .pipe(less())
        .pipe(gulp.dest("./dist/css"))
        .pipe(reload({stream:true}))
});
gulp.task("serve",["myless"],function () {
    browsersync.init({
        server:"./"
    });
    gulp.watch("src/*.less",["myless"]);
    gulp.watch("*.html").on("change",reload);
});