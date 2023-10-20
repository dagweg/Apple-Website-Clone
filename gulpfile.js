const gulp = require("gulp")
const shell = require("gulp-shell")

gulp.task("tailwind", shell.task([
    "npx tailwindcss-cli build ./css/tailwind-dev.css -o ./css/tailwind-dist.css"
]))

gulp.task('watch', () => {
    gulp.watch('./css/tailwind-dev.css', gulp.series('tailwind'))
})

gulp.task('default', gulp.series('tailwind', 'watch'))
