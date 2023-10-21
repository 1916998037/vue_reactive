module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
      // 所有文件的输出路径
      // 开发模式没有输出
      path: undefined,
      // 入口文件打包输出文件名
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
      // 开发服务器: 不会输出资源，在内存中编译打包的
    devServer: {
      host: "localhost", // 域名
      port: "3000", // 端口号
    },
    // 模式
    mode: "development",
};