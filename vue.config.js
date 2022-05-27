const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //代理跨域
    // devServer: {
    //     open: true,
    //     proxy: {
    //         '/': {
    //             target: 'http://4934d114v1.qicp.vip/',
    //             pathRewrite: { '^/': '' },
    //             changeOrigin: true,
    //         }
    //     },
    //     disableHostCheck: true
    // }
})
