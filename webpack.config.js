var  webpack = require('webpack');
module.exports = {
    entry:{
        bundle:'./test.jsx',
        vendor:['react','redux','react-dom','react-redux','reqwest','react-router','redux-thunk']
    },
    output:{
        path: __dirname+'/bundle/',
        publicPath:'bundle/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    watch:true,
    resolve:{
        alias:{
            //...
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),        
        //new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
  ]
}