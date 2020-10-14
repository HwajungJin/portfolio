const path = require('path');

const resolvePath = relPath => path.resolve(__dirname, relPath)
const appSrc = resolvePath('src')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Jin/'
    : '/',
  outputDir: 'docs',
  configureWebpack: {
    resolve: {
      alias: {
        '@': appSrc,
        '@components': path.join(appSrc, 'views/components'),
        '@pages': path.join(appSrc, 'views/pages'),
        '@utils': path.join(appSrc, 'views/utils'),
        '@controller': path.join(appSrc, 'controller')
      }
    }
  }
}