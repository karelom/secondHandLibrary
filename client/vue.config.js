module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://node-api:9500', // docker
                // target: 'http://localhost:9500', // local test
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}