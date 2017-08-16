import config from "../webpack/dev.config.babel.js"
import webpack from "webpack"
import webpackDevServer from "webpack-dev-server"

const compiler = webpack(config)
const port = 3000

const serverDevClient = new webpackDevServer(compiler, {
    hot: true,
    contentBase: "./",
    publicPath: config.output.publicPath,
    stats: { colors: true },
    headers: { "Access-Control-Allow-Origin": "*" }
})   


serverDevClient.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server front running on port: ${port}`)
    }
})
