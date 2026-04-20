module.exports = {
    css: ['./dist/MeirMarchovich/browser/*.css'],
    content: [
        './dist/MeirMarchovich/browser/index.html',
        './dist/MeirMarchovich/browser/*.js',
    ],
    safelist: [/^grid/, /^col-/, /^sm:/, /^md:/, /^lg:/, /^xl:/],
    output: './dist/MeirMarchovich/browser/',
}
