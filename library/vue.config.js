module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9500',
        changeOrigin: true
      }
    }
  }
}
