const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    port: 8080,
    proxy: {
        '^/api': {
          target: 'http://localhost:3000',
            changeOrigin: true,
        }
    }
  }
})
