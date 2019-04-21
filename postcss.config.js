module.exports = () => ({
    map: false,
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 9', 'safari >= 7'],
        }),
        require('cssnano')({
            discardComments: {
                removeAll: true,
            },
            zindex: false,
            options: {
                sourcemap: false,
            },
        }),
    ],
});
