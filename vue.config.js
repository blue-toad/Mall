module.exports = {
  configureWebpack: {
    resolve: {
      //为项目目录添加别名
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'utils': '@/utils'
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
