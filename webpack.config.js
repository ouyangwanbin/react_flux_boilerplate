var webpack = require('webpack');
var path =require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app:'./app/App.jsx',
        vendor: ["react", "react-dom", "flux"]
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            },
            { test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
            { test: /\.[ot]tf(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
            { test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' }
        ]
    },
    plugins: [
                // new webpack.DefinePlugin({
                //   'process.env':{
                //     'NODE_ENV': JSON.stringify('production')
                //   }
                // }),
                //  new webpack.optimize.UglifyJsPlugin({
                //      compress: {
                //          warnings: false
                //      }
                //  }),
                new webpack.optimize.CommonsChunkPlugin( "vendor", "vendor.bundle.js"),
                new CleanWebpackPlugin(['dist'], {
                  root: process.cwd(),
                  verbose: true, 
                  dry: false,
                  exclude: []
                })
            ]
};