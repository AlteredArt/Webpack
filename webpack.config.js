const path = require ('path');

module.exports = {
// entry point for build process
    entry: './src/index.js',
// output file for view
    output: {
// name of output file
        filename: 'bundle.js',
// where to generate it if it does not exist
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    }
}