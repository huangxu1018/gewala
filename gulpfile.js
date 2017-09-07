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
gulp.task("myuglify",function () {
    gulp.src("src/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
});
gulp.task("minify-css",function () {
    gulp.src("src/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist/css"))
});
gulp.task("minify-html",function () {
    gulp.src("src/html/*.html")
        .pipe(htmlmini())
        .pipe(gulp.dest("./dist/html"))
});
gulp.task("myless",function () {
    gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./dist/css"))
        .pipe(reload({stream:true}))
});
gulp.task("serve",["myless"],function () {
    browsersync.init({
        server:"./"
    });
    gulp.watch("src/less/*.less",["myless"]);
    gulp.watch("*.html").on("change",reload);
});