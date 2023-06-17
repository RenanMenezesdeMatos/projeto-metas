const path = require('path')

module.exports = {
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'src')
      },
      compress: true,
    },
    entry: {
        index: 'C:/Users/Renan/Documents/projeto-metas/js/index.js',
    },
	mode: 'development',
    output: {
        path: 'C:/Users/Renan/Documents/projeto-metas/src'
    }
}