const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 3000,
    proxy: {
      '^/api': {
        target: 'https://github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '^/api1': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api1': '/'
        }
      }
    }
  },
  transpileDependencies: true
})
