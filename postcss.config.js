const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    // parser: 'sugarss',
    plugins: [
        purgecss({
            content: ['./**/*.html']
          }),
        require('postcss-preset-env')({
            stage: 3,
        })
    ]
}
