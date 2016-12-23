module.exports = {
    entry: __dirname + '/src/mouseover.js',
    output: {
        path: __dirname + '/dist',
        filename: 'mouseover.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
