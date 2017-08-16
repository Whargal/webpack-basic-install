import path from "path"
import webpack from "webpack"
import baseConfig from "./base.config"

baseConfig.entry.app.unshift("react-hot-loader/patch", "webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server")

baseConfig.plugins = [...baseConfig.plugins, 
  new webpack.HotModuleReplacementPlugin()
]


export default baseConfig