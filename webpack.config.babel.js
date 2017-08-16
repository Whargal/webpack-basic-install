import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const paths = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "dist"),
    node_modules: path.resolve(__dirname, '/node_modules')
}


export default {
    entry: {
        app: [`${paths.src}/js/index.js`, `${paths.src}/scss/style.scss`],
    },
    module: {
        loaders: [ {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader?-url', 'sass-loader']
          })
        }, {
            test: /\.js$/,
            exclude: paths.node_modules,
            loader: 'babel-loader',
        } ],
    },
    output: {
        path: paths.dist,
        filename: "app.js",
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
    ],
}
