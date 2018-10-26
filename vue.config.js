const path = require('path');

module.exports = {
    productionSourceMap: false,
    transpileDependencies: ["vue-baidu-map"],
    configureWebpack: {
      resolve: {
        alias : {
          "icons": path.resolve(__dirname, "node_modules/vue-material-design-icons")
        },
        extensions: [
          ".vue"
        ]
      },
      optimization: {
        minimize: false
      },
      devtool: 'eval-source-map'
    }
  }