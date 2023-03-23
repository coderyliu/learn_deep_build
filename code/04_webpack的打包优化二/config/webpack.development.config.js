const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public')
    },
    port: 8088,
    open: true,
    // host: '0.0.0.0',
    hot: true,
    proxy: {
      '/playlist': {
        target: 'http://www.coderyliu.online:3000',
        changeOrigin: true,
        pathWrite: ''
      }
    },
    compress: true,
    historyApiFallback: true
  }
}