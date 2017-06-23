const path = require('path');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname, 'electron', 'renderer', 'src'),
    output: {
        path: path.resolve(__dirname, 'electron', 'renderer', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {loader: 'babel-loader'}
        }]
    }
};