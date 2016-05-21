module.exports = {
    entry:'./test.jsx',
    output:{
        path:__dirname+'/bundle/',
        filename:'bundle.js'
    },
    watch:true,
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
    }
}