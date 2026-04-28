module.exports = {
    css: ['./dist/MeirMarcovich/browser/*.css'],
    content: [
        './dist/MeirMarcovich/browser/index.html',
        './dist/MeirMarcovich/browser/*.js',
    ],
    safelist: [/^grid/, /^col-/, /^sm:/, /^md:/, /^lg:/, /^xl:/],
    output: './dist/MeirMarcovich/browser/',
}
