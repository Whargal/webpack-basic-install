import path from 'path'
import webpack from 'webpack'

const paths = {
    src: path.resolve(__dirname, "../public/src"),
    dist: path.resolve(__dirname, "../public/dist"),
    node_modules: path.resolve(__dirname, '../node_modules')
}


export default {
    entry: {
        app: [`${paths.src}/index.js`],
    },
    module: {
        loaders: [ {
            test: /\.scss$/,
            use: [ {
                loader: 'style-loader',
            }, {
                loader: 'css-loader?-url',
            }, {
                loader: 'sass-loader',
            } ]
        }, {
            test: /\.js$/,
            exclude: paths.node_modules,
            loader: 'babel-loader',
        } ],
    },
    output: {
        path: paths.dist,
        filename: "app.js",
        publicPath: "/public/dist",
    },
    plugins: [],
}
